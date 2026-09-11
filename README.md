# SoulVoice — Marketing Website

A responsive, single-page marketing site for **SoulVoice**, an always-on voice/personality-clone wearable. Static HTML/CSS/JS — no build step, no dependencies. Deploys to any static host.

## Structure

```
soulvoice-website/
├── index.html          # all page content and markup
├── css/
│   └── styles.css      # mobile-first styles (breakpoints: 600 / 820 / 1024)
├── js/
│   └── main.js         # hero waveform, mobile menu, FAQ accordion
├── assets/
│   └── favicon.svg     # site icon (add og-image.png here too)
└── README.md
```

## Preview locally

No build needed. Because the page loads fonts and split CSS/JS, open it through a local server (not `file://`):

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy

**GitHub Pages** — push to a repo, then Settings → Pages → deploy from the `main` branch (root). Live at `https://<user>.github.io/<repo>/`.

**Netlify** — "Add new site" → import the repo. Build command: *(none)*. Publish directory: `.`

**Vercel** — "Add New… Project" → import the repo → Framework preset: *Other*. No build settings needed.

## Before launch — replace these

- **Price** — `$149` appears in `index.html` (pricing card, hero-adjacent CTA, final CTA).
- **Product photos** — the hero and "how it works" artwork are abstract SVG placeholders. Swap in real photography.
- **Testimonial** — the founding-member quote is a labelled placeholder. Replace with a real quote; don't ship the placeholder.
- **Pricing model** — confirm one-time vs. subscription in the pricing card and FAQ.
- **og-image.png** — add a 1200×630 image to `assets/` for social sharing (referenced in `<head>`).
- **Contact / legal links** — footer links are `#` placeholders. Point them at real pages, and have counsel review the recording-law and returns wording.
- **Domain** — update the `canonical` and `og:url` URLs in `index.html`.

## Customization notes

- **Colours & type** live as CSS custom properties at the top of `styles.css` (`:root`). Change the brand colour once there.
- **Fonts** are Fraunces (display) + IBM Plex Sans (body), loaded from Google Fonts. To self-host, download them into `assets/fonts/` and replace the `<link>` in `index.html`.
- **Accessibility**: keyboard focus states, reduced-motion support, and a skip link are built in. Keep them if you edit.

## License

Add your preferred license (e.g. MIT) here before making the repo public.
