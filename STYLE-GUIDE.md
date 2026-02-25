# Shoperly Content Style Guide

Single source of truth for carousel/content generation. Everything the generator needs lives here.

## Canvas & Safe Zones

### TikTok (primary target)
- **Canvas:** 1080 x 1920 px (9:16)
- **Safe zone:** 900 x 1492 px, centered
- **Dead zones (DO NOT place important content here):**
  - **Top:** 130 px (navigation bar, Following/For You tabs, search icon, Dynamic Island on newer iPhones adds ~40px more)
  - **Bottom:** 350 px (captions, handle, audio disc, engagement buttons)
  - **Right:** 120 px (like/comment/share/save button stack)
  - **Left:** 60 px (edge margin)
- **Practical padding for our templates:**
  - Top padding: 150 px
  - Bottom padding: 380 px
  - Left padding: 80 px
  - Right padding: 140 px
- **"Golden rectangle" (guaranteed visible):** 900 x 1200 px centered — the absolute safest area
- **Caption length matters:** 1-line caption = ~80px bottom dead zone. 3-line with hashtags = 250px+. We write long captions, so design for 350px bottom.
- **Carousel-specific:** Swipe dots/indicator appears at bottom center (~40px), already inside the bottom dead zone. No extra concern.

### Instagram Reels (cross-post)
- **Canvas:** 1080 x 1920 px (same)
- **Safe zone:** 996 x 1400 px
- **Top dead zone:** 210 px
- **Bottom dead zone:** 310 px (420px for boosted/paid)
- **Right dead zone:** 84 px
- Our TikTok safe zone is MORE conservative, so TikTok-safe = Instagram-safe ✅

### Universal Safe Zone (works everywhere)
- **900 x 1400 px centered** — if content fits here, it's visible on TikTok, Instagram Reels, Stories, and YouTube Shorts

## Template Padding (applied in HTML)

Based on safe zones, our templates use:
```
padding-top:    150px   (was 80px — increased for top dead zone)
padding-bottom: 400px   (was 80px — increased for bottom dead zone)
padding-left:   80px    (safe — 60px dead zone + 20px breathing room)
padding-right:  150px   (was 80px — increased for right button stack)
```

Content area after padding: **850 x 1370 px** — well within safe zone on all platforms.

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Shoperly Yellow | `#FFDD04` | Primary accent, CTA backgrounds, step numbers, highlights |
| Dark | `#1a1a1a` | Background (dark theme), text (light theme), CTA pills |
| White | `#ffffff` | Text on dark backgrounds |
| Body text (dark bg) | `rgba(255,255,255,0.75)` | Secondary text on dark slides |
| Body text (yellow bg) | `rgba(0,0,0,0.6)` | Secondary text on yellow slides |
| Muted (dark bg) | `rgba(255,255,255,0.35)` | Slide numbers, "desliza", subtle elements |
| Muted (yellow bg) | `rgba(0,0,0,0.35)` | Slide numbers, subtle elements on yellow |

## Typography

- **Font family:** Inter (Google Fonts) — `wght@500;700;800;900`
- **Fallback:** `-apple-system, sans-serif`

### Font sizes (at 1080x1920 canvas)
| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| Hook headline | 100-120px | 900 | ALL CAPS, letter-spacing: -4px |
| Content slide title | 72px | 900 | ALL CAPS, letter-spacing: -3px |
| Step number | 160px | 900 | Yellow accent, letter-spacing: -6px |
| Body text | 40px | 500 | line-height: 1.5, max-width: 750px |
| Subtitle | 42px | 800 | line-height: 1.35 |
| Tip box text | 34px | 700 | Inside colored box |
| Tip box label | 20px | 800 | ALL CAPS, letter-spacing: 3px |
| CTA headline | 88px | 900 | ALL CAPS, centered |
| CTA subtitle | 40px | 700 | |
| CTA pill | 36px | 900 | ALL CAPS inside rounded pill |
| Logo wordmark | 27px height | — | SVG, scales with container |
| Slide number | 28px | 800 | letter-spacing: 2px |
| "Desliza" / swipe | 30px | 800 | ALL CAPS, letter-spacing: 3px |
| Save text | 30px | 800 | ALL CAPS, letter-spacing: 3px |

## Logo

The Shoperly logo is an SVG from the codebase (`components/assets/logo.tsx` + `logo-text.tsx`).

### Logo components:
1. **Icon** — rounded square with image/gallery motif + yellow dot accent (viewBox: 0 0 33 30)
2. **Wordmark** — "shoperly" custom letterforms (viewBox: 0 0 96 27)

### Logo colors by theme:
| Theme | Icon fill | Yellow dot | Wordmark fill |
|-------|-----------|------------|---------------|
| Dark background | `white` | `#FFDD04` (always) | `white` |
| Yellow background | `#1a1a1a` | `#FFDD04` (always) | `#1a1a1a` |
| CTA slide | `#1a1a1a` | `#FFDD04` | `#1a1a1a` |

### Logo placement:
- Top-left corner, flex row with 14px gap between icon and wordmark
- Icon: 44x40px rendered size
- Wordmark: 27px height (auto width)

### Logo SVG files:
- `templates/logo-icon.svg` — standalone icon
- Inline in templates — both icon + wordmark SVG paths embedded directly

## Slide Types

### 1. Hook (slide 1)
- Yellow bar accent (80x6px, border-radius 3px)
- Huge headline with optional `<span class='accent'>` for yellow words
- Optional subtitle below
- "Desliza →" at bottom
- Theme: usually `yellow` or `dark`

### 2. Content (slides 2-5)
- Large step number (01, 02, etc.) in yellow
- Title in ALL CAPS
- Body paragraph
- Optional tip box (colored background with label + text)
- "→" at bottom
- Theme: usually `dark`, occasional `yellow` for variety/emphasis

### 3. CTA (last slide)
- Always yellow background
- Centered layout
- Big headline
- Subtitle
- "shoperly.app" pill button (dark bg, yellow text)
- "Guardá este post 🔖" at bottom
- Decorative circles

## Content Rules

### Language
- All content in **Spanish** (Paraguayan audience)
- Use **voseo** ("vos" not "tú") — "Creá", "Poné", "Usá"
- Casual, direct tone
- No jargon

### Slide structure (5-6 slides)
1. **HOOK** — bold statement that stops the scroll
2-4. **CONTENT** — one point per slide, tip box for actionable advice
5-6. **CTA** — summary + call to action

### Caption format
```
[Hook line with emoji]

[2-3 lines of value/context]

[CTA: Creá tu tienda gratis en shoperly.app]

#emprendedoresparaguayos #tiendaonline #ecommerce #shoperly #ventasonline #paraguay #emprendimiento
```

### Hashtags (core set)
`#emprendedoresparaguayos #tiendaonline #ecommerce #shoperly #ventasonline #emprendedorespy #negocioonline #paraguay #emprendimiento`

Add 2-3 topic-specific ones per post.

## File Structure

```
shoperly-content/
├── STYLE-GUIDE.md          ← this file
├── generate.js             ← generator script
├── templates/
│   ├── hook.html
│   ├── content.html
│   ├── cta.html
│   └── logo-icon.svg
├── carousels/
│   ├── 01-errores-tienda.json
│   ├── 02-instagram-vs-tienda.json
│   └── 03-whatsapp-ventas.json
└── output/
    └── [carousel-id]/
        ├── slide-1.png
        └── ...
```

## Automation Notes

- Generator: `node generate.js <carousel.json> [output_dir]`
- Each carousel is a JSON file with `id`, `topic`, `caption`, and `slides[]`
- Slides specify `type` (hook/content/cta), `theme` (dark/yellow), and content fields
- Playwright renders HTML at 1080x1920 and screenshots to PNG
- ~10 seconds per carousel (6 slides)
- Future: cron job generates carousel → drops into Discord channel with caption
