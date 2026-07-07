# Lindsay King — Portfolio Site Handoff

Context for picking this project back up in Claude Code.

## What this is
A single-page personal portfolio site for Lindsay King, an early-career nonprofit
professional (community health, organizing, mental health) targeting **grad school
applications and employers**.

Files: `index.html`, `style.css`, `script.js` — no build step, no framework, no
dependencies. Just open `index.html` in a browser.

## Design system (don't deviate without reason)
- **Aesthetic**: minimalist but bubbly/inviting, warm editorial
- **Fonts**: `Fraunces` (serif, headlines) + `Work Sans` (sans, body) — loaded via
  Google Fonts in `index.html`'s `<head>`
- **Palette** (all defined as CSS custom properties in `style.css` `:root`):
  - `--cream: #FFFBF5` — page background
  - `--ink: #2B2130` — primary text / outlines
  - `--ink-soft: #6B5F6E` — secondary text
  - `--pink: #FFD3E0` / `--pink-deep: #FF8FAE`
  - `--yellow: #FFE28A` / `--yellow-deep: #FFC93C`
- **Signature visual motif**: flat "paper cutout / sticker" style — 2px ink
  outlines + **hard offset shadows** (e.g. `box-shadow: 4px 4px 0 var(--ink)`,
  no blur) on buttons, pills, and cards. Keep this consistent for any new
  components (don't introduce soft/blurred box-shadows).
- Hand-drawn squiggle SVG underlines appear under section headings — reuse the
  same `<svg class="squiggle">` pattern if adding new sections.

## Page structure
1. **Hero** (`#top`) — name, tagline, CTA buttons, rotated "polaroid" photo
   placeholder with washi tape (needs a real headshot swapped in)
2. **About** (`#about`) — pull-quote + story + interest tags
3. **Work** (`#work`) — filterable card grid. Categories: `research`,
   `professional`, `personal`, `soon` (matches `data-filter` / `data-category`
   attributes). Filtering logic lives in `script.js`.
4. **Contact** (`#contact`) — diagonal pink/yellow band, social links only
   (no form, by request)

## Known placeholders that still need real content
- [ ] Real headshot to replace `.photo-placeholder` div (swap for an `<img>`)
- [x] LinkedIn URL — `https://www.linkedin.com/in/lcking`
- [x] Email address — `lindsayking223@gmail.com`
- [x] Substack URL — `https://lindsaycking.substack.com`
- [ ] Real project links on the 4 work cards (currently `href="#"`)
- [ ] Confirm/replace sample copy in About and card descriptions with anything
      more specific Lindsay wants surfaced

## Deployment
Not yet deployed. Plan discussed: Netlify Drop for a quick live link, or GitHub
Pages for a more permanent git-based setup, optionally with a custom domain
later.

## Things to preserve if refactoring
- Accessibility: skip link, visible focus states, `aria-selected` on filter
  pills, `prefers-reduced-motion` support — keep these intact
- Fully static, no localStorage/sessionStorage used anywhere
- Responsive breakpoints at 860px and 560px in `style.css`
