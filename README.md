# First Class Roofing LLC — demo site

Single-page static demo for First Class Roofing LLC (Waipahu, HI). No build step —
`index.html` + `styles.css` + `main.js`, with GSAP self-hosted in `vendor/`.

This is an **unlisted demo**: the page ships with `<meta name="robots" content="noindex, nofollow">`
and the estimate form is a stub (it shows the success state and sends nothing).

## Deploy

One line, from this folder:

```
vercel --prod
```

Or drag-and-drop this folder onto the Vercel dashboard (vercel.com/new). No config needed —
it deploys as static files as-is.

## After payment (not before)

- **Custom domain** — connect on the Vercel dashboard.
- **Real form wiring** — point the estimate form at a form backend or email service,
  and remove the stub handler in `main.js`.
- **License number** — replace the visible `[HI License #]` placeholder in the footer.

The three frames in the jobs section use real First Class job photos (metal, shingle, tile)
pulled from the company's existing site — swap in Bryan's preferred shots in `assets/` anytime.

## Verified

- 390×844 and 1440×900, no horizontal scroll, tap targets ≥ 44px
- Lighthouse mobile: Performance 99 · Accessibility 100 · Best Practices 100
  (SEO is intentionally suppressed by the `noindex` tag)
- `prefers-reduced-motion`: all motion off, content fully visible
- Console clean
