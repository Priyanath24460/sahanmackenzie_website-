# Mackenzie’s Atelier

An interior design studio website built with Next.js 16 App Router, React, TypeScript, and Tailwind CSS 4.

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
npm start
```

## Source structure

```text
src/
├── app/
│   ├── layout.tsx          # Font, metadata, header, footer and shared effects
│   ├── page.tsx            # Original homepage section composition
│   ├── globals.css         # Existing Tailwind theme, utilities and animations
│   ├── not-found.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── spaces/page.tsx
│   ├── process/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/             # Shared header and footer
│   ├── sections/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── services/
│   │   ├── spaces/
│   │   ├── process/
│   │   ├── journal/
│   │   ├── craft/
│   │   ├── quotes/
│   │   ├── faq/
│   │   └── contact/
│   └── ui/                 # Counter, horizontal track, scroll effects, back to top
├── hooks/                  # Reusable horizontal-track behavior
├── content/                # About, services, spaces, process, journal, home and site data
└── lib/                    # Shared animation-delay helper
```

`src/app/page.tsx` assembles the existing homepage. Section components preserve its markup, imagery, colors, responsive styling, and animation timings. Homepage navigation continues to use its original section anchors.

The homepage also includes `components/sections/about/founder-profile.tsx` between the original philosophy and Services sections. Its introduction, career labels, image reference, and About link are editable in `src/content/about.ts`. The owner-supplied portrait is stored at `public/images/atelier/founder.png`, with transparency preserved and the full portrait contained within its frame. The section uses the existing theme and scroll-reveal behavior, with a two-column desktop layout that stacks on smaller screens. The earlier illustrative studio asset and its generation prompt remain archived but are no longer displayed.

The `/about`, `/services`, `/spaces`, `/process`, and `/contact` pages reuse existing content and components. On these pages, shared header/footer links return to the corresponding homepage sections. About uses the existing philosophy section; service and space pages retain the existing interactive card tracks. These routes do not introduce additional editorial copy, project claims, or contact forms.

Journal articles and individual service/space routes are deferred until their content is ready. The homepage journal previews retain their existing “Coming soon” labels.

Components that use browser state or effects contain `'use client'`. Regular `.tsx` filenames are used throughout. The shared scroll-effects component reconnects its observers and scroll handler when the route changes.

## Content and images

- `src/content/about.ts`: existing philosophy paragraphs and the homepage founder introduction.
- `src/content/services.ts` and `spaces.ts`: card content and image references.
- `src/content/process.ts`: the eight process steps.
- `src/content/journal.ts`: article previews.
- `src/content/home.ts`: quotes, FAQs, and craft labels.
- `src/content/site.ts`: existing contact placeholders.
- `public/images/`: existing image assets, with unchanged URLs.
- `docs/image-generation/`: image-generation prompts and asset mappings.
- `output/`: generated previews, screenshots, and validation reports.

Replace the email, phone, and Instagram placeholders before launch. Existing generated images illustrate the studio’s design direction; completed-project photography can be added when permissions and image rights are confirmed.

## Visual verification

`scripts/visual-checks/folder-refactor.cjs` compares the homepage with a captured pre-refactor baseline at 1280, 768, 390, and 320 pixels wide. It compares all rendered site elements, sampled styles including pseudo-elements, and full-page screenshots. Timed visual states are frozen, and the Next.js development indicator is hidden for the comparison. Screenshot checks allow at most one color level of compositor rounding; sampled styles and markup must match exactly.

`scripts/visual-checks/site-interactions.cjs` checks counters, reveals, carousels, dragging, quote selection, slideshow timers, parallax, FAQ toggling, back-to-top, reduced motion, dedicated routes, and the custom 404 page.

Run against a running development or production server:

```bash
node scripts/visual-checks/folder-refactor.cjs
node scripts/visual-checks/site-interactions.cjs
```

The scripts accept `SITE_URL`, `PLAYWRIGHT_MODULE` (a path to `playwright-core`), and `BROWSER_EXECUTABLE`. Their local defaults use the existing temporary Playwright installation and Microsoft Edge on Windows. `folder-refactor.cjs --baseline` captures the currently served homepage as a baseline; only run it intentionally, since it replaces the comparison reference. Refactor evidence is stored in `output/folder-refactor/`.

The moved `baseline.cjs`, `compare.cjs`, and `interactions.cjs` are historical Tailwind-migration checks. They retain their original local temporary-file dependencies and ports.
