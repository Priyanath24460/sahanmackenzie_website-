const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || path.join(process.env.TEMP, 'atelier-tailwind-browser/node_modules/playwright-core'));

async function main() {
  const browser = await chromium.launch({
    executablePath: process.env.BROWSER_EXECUTABLE || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
  });
  const base = process.env.SITE_URL || 'http://localhost:3000';
  const checks = {};
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1600);

    checks.heroCentered = await page.evaluate(() => {
      const hero = document.querySelector('.hero').getBoundingClientRect();
      const heading = document.querySelector('.hero h1').getBoundingClientRect();
      return Math.abs(hero.top + hero.height / 2 - heading.top - heading.height / 2) < 1;
    });
    assert(checks.heroCentered);
    await page.evaluate(() => scrollTo({ top: 200, behavior: 'instant' }));
    await page.waitForTimeout(100);
    checks.heroParallax = await page.$eval('.hero-in', element => element.style.transform === 'translateY(50px)');
    assert(checks.heroParallax);

    await page.$eval('#about', element => element.scrollIntoView({ behavior: 'instant' }));
    await page.waitForFunction(() => [...document.querySelectorAll('.stats b')].map(element => element.textContent).join(',') === '10+,8,8,4');
    checks.counters = await page.locator('.stats b').allTextContents();
    checks.reveal = await page.locator('#about .rv.in').count() > 0;
    assert(checks.reveal);

    for (const id of ['services', 'projects']) {
      await page.$eval('#' + id, element => element.scrollIntoView({ behavior: 'instant' }));
      await page.waitForTimeout(1100);
      await page.locator('#' + id + ' button[aria-label="Next"]').click();
      await page.waitForFunction(selector => document.querySelector(selector).scrollLeft > 0, '#' + id + ' .track');
      checks[id + 'Carousel'] = true;
    }
    checks.drag = await page.$eval('#services .track', element => {
      const before = element.scrollLeft;
      element.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType: 'mouse', clientX: 500 }));
      element.dispatchEvent(new PointerEvent('pointermove', { bubbles: true, pointerType: 'mouse', clientX: 350 }));
      const moved = element.scrollLeft > before;
      element.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerType: 'mouse' }));
      return moved && !element.classList.contains('drag');
    });
    assert(checks.drag);

    await page.$eval('.testi', element => element.scrollIntoView({ behavior: 'instant', block: 'center' }));
    await page.locator('button[aria-label="Quote 3"]').click();
    checks.quoteSelection = await page.locator('.q').evaluateAll(elements => elements.findIndex(element => element.classList.contains('on')));
    assert.equal(checks.quoteSelection, 2);
    for (const [selector, layer] of [['.testi', '.testi>.ph'], ['.video', '#vp']]) {
      await page.$eval(selector, element => element.scrollIntoView({ behavior: 'instant', block: 'center' }));
      await page.waitForTimeout(100);
      const before = await page.$eval(layer, element => element.style.transform);
      await page.evaluate(() => scrollBy({ top: 80, behavior: 'instant' }));
      await page.waitForTimeout(100);
      checks[selector + 'Parallax'] = (await page.$eval(layer, element => element.style.transform)) !== before;
      assert(checks[selector + 'Parallax']);
    }

    await page.$eval('#faq', element => element.scrollIntoView({ behavior: 'instant' }));
    await page.waitForTimeout(1100);
    const firstFaq = page.locator('#faq button').first();
    await firstFaq.click();
    assert.equal(await firstFaq.getAttribute('aria-expanded'), 'true');
    await firstFaq.click();
    assert.equal(await firstFaq.getAttribute('aria-expanded'), 'false');
    checks.faq = true;

    await page.locator('#top-btn').click();
    await page.waitForFunction(() => scrollY === 0);
    checks.backToTop = true;
    const states = [];
    for (let index = 0; index < 7; index++) {
      states.push(await page.evaluate(() => ({
        hero: [...document.querySelectorAll('.slide')].findIndex(element => element.classList.contains('on')),
        quote: [...document.querySelectorAll('.q')].findIndex(element => element.classList.contains('on')),
      })));
      if (index < 6) await page.waitForTimeout(1000);
    }
    checks.heroTimer = new Set(states.map(state => state.hero)).size > 1;
    checks.quoteTimer = new Set(states.map(state => state.quote)).size > 1;
    assert(checks.heroTimer && checks.quoteTimer);

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.reload();
    checks.reducedMotion = await page.$eval('.rv', element => getComputedStyle(element).opacity === '1' && getComputedStyle(element).transform === 'none');
    assert(checks.reducedMotion);
    await page.emulateMedia({ reducedMotion: 'no-preference' });

    checks.routes = {};
    for (const viewport of [{ width: 1280, height: 720 }, { width: 390, height: 844 }]) {
      await page.setViewportSize(viewport);
      for (const route of ['about', 'services', 'spaces', 'process', 'contact']) {
        const response = await page.goto(base + '/' + route);
        assert.equal(response.status(), 200);
        assert.equal(await page.locator('main h1').count(), 1);
        assert.equal(await page.locator('header').count(), 1);
        assert.equal(await page.locator('footer').count(), 1);
        assert.equal(await page.locator('header nav a').first().getAttribute('href'), '/#about');
        await page.waitForTimeout(300);
        const revealCount = await page.locator('main .rv').count();
        if (revealCount) assert(await page.locator('main .rv.in').count() > 0);
        checks.routes[`${route}-${viewport.width}`] = true;
      }
    }
    const missing = await page.goto(base + '/this-page-does-not-exist');
    assert.equal(missing.status(), 404);
    assert.equal(await page.locator('main h1').textContent(), 'Page not found');
    checks.notFound = true;
    checks.pageErrors = errors;
    assert.deepEqual(errors, []);
    const output = path.resolve(__dirname, '../../output/folder-refactor');
    fs.mkdirSync(output, { recursive: true });
    fs.writeFileSync(path.join(output, 'interactions.json'), JSON.stringify(checks, null, 2));
    console.log(JSON.stringify(checks, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
