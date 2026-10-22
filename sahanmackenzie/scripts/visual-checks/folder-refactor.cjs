/* Compare the preserved homepage against the pre-refactor source backup. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const sharp = require('sharp');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || path.join(process.env.TEMP, 'atelier-tailwind-browser/node_modules/playwright-core'));

const root = path.resolve(__dirname, '../..');
const output = path.join(root, 'output/folder-refactor');
const baselineMode = process.argv.includes('--baseline');
const profiles = [
  { key: 'desktop', width: 1280, height: 720 },
  { key: 'tablet', width: 768, height: 1024 },
  { key: 'phone', width: 390, height: 844 },
  { key: 'small', width: 320, height: 640 },
];
const props = ['display', 'position', 'width', 'height', 'minHeight', 'maxHeight', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textTransform', 'color', 'backgroundColor', 'backgroundImage', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'gap', 'gridTemplateColumns', 'gridTemplateRows', 'aspectRatio', 'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderColor', 'borderRadius', 'textAlign', 'alignItems', 'justifyContent', 'overflowX', 'transitionProperty', 'transitionDuration', 'animationName'];

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({
    executablePath: process.env.BROWSER_EXECUTABLE || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
  });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => { window.setInterval = () => 0; });
    const snapshots = {};
    const results = {};
    for (const profile of profiles) {
      await page.setViewportSize({ width: profile.width, height: profile.height });
      await page.goto(process.env.SITE_URL || 'http://localhost:3000/', { waitUntil: 'networkidle' });
      await page.locator('.hero h1').waitFor();
      await page.evaluate(async () => {
        await document.fonts.ready;
        document.querySelectorAll('img').forEach(image => { image.loading = 'eager'; });
        await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
      });
      await page.addStyleTag({ content: `
        nextjs-portal{display:none!important}
        *,*::before,*::after{transition-duration:0s!important}
        .slide{animation:none!important;opacity:0!important;transform:scale(1.02)!important}
        .slide:first-child{opacity:1!important}
        .ln span{animation:none!important;transform:none!important}
        .tags .wrap{animation:none!important;opacity:1!important}
        .rv{opacity:1!important;transform:none!important}
        .hero-in{transform:none!important;opacity:1!important}
        .testi>.ph,#vp{transform:none!important}
      ` });
      await page.evaluate(() => {
        document.querySelectorAll('.stats b').forEach((element, index) => { element.textContent = ['10+', '8', '8', '4'][index]; });
      });
      snapshots[profile.key] = await page.evaluate(properties => {
        const roots = [...document.querySelectorAll('body > header, body > .stage, body > footer, body > #top-btn')];
        return roots.flatMap(element => [element, ...element.querySelectorAll('*')]).map(element => ({
          tag: element.tagName,
          classes: element.className.split(/\s+/).filter(value => !['on', 'in', 'show', 'hide', 'solid'].includes(value)).join(' '),
          id: element.id,
          href: element.getAttribute('href'),
          alt: element.getAttribute('alt'),
          text: element.children.length ? null : element.textContent.replace(/\s+/g, ' ').trim(),
          styles: properties.map(property => getComputedStyle(element)[property]),
          before: properties.map(property => getComputedStyle(element, '::before')[property]),
          after: properties.map(property => getComputedStyle(element, '::after')[property]),
        }));
      }, props);
      const filename = `${profile.key}-${baselineMode ? 'before' : 'after'}.png`;
      const screenshot = await page.screenshot({ fullPage: true, path: path.join(output, filename) });
      if (!baselineMode) {
        const before = JSON.parse(fs.readFileSync(path.join(output, 'baseline.json'), 'utf8'))[profile.key];
        const differences = [];
        const after = snapshots[profile.key];
        for (let index = 0; index < Math.max(before.length, after.length); index++) {
          if (JSON.stringify(before[index]) !== JSON.stringify(after[index])) {
            differences.push({ index, before: before[index], after: after[index] });
          }
        }
        const first = await sharp(path.join(output, `${profile.key}-before.png`)).raw().toBuffer({ resolveWithObject: true });
        const second = await sharp(screenshot).raw().toBuffer({ resolveWithObject: true });
        let changedChannels = 0;
        let maxChannelDelta = 0;
        if (first.data.length === second.data.length) {
          for (let index = 0; index < first.data.length; index++) {
            const delta = Math.abs(first.data[index] - second.data[index]);
            if (delta) changedChannels++;
            maxChannelDelta = Math.max(maxChannelDelta, delta);
          }
        }
        results[profile.key] = { elementsBefore: before.length, elementsAfter: after.length, elementDifferences: differences.length,
          screenshotDimensionsMatch: JSON.stringify(first.info) === JSON.stringify(second.info), changedChannels, maxChannelDelta };
        fs.writeFileSync(path.join(output, `${profile.key}-differences.json`), JSON.stringify(differences, null, 2));
      }
      console.log(`${profile.key}: ${snapshots[profile.key].length} elements captured`);
    }
    fs.writeFileSync(path.join(output, baselineMode ? 'baseline.json' : 'current.json'), JSON.stringify(snapshots));
    if (!baselineMode) {
      results.pageErrors = errors;
      fs.writeFileSync(path.join(output, 'validation.json'), JSON.stringify(results, null, 2));
      console.log(JSON.stringify(results, null, 2));
      assert.deepEqual(errors, []);
      for (const profile of profiles) {
        assert.equal(results[profile.key].elementDifferences, 0, `${profile.key} markup/style differences`);
        assert.equal(results[profile.key].screenshotDimensionsMatch, true);
        // Chromium can round composited image colors by one level between captures.
        // Markup and every sampled computed style must still match exactly above.
        assert(results[profile.key].maxChannelDelta <= 1, `${profile.key} screenshot differences`);
      }
    }
  } finally {
    await browser.close();
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
