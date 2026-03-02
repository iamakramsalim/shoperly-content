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

### Hashtags
**TikTok limit: 5 hashtags max.** Pick the 5 most relevant from the pool below per post.

Core pool: `#emprendedoresparaguayos` `#tiendaonline` `#ecommerce` `#shoperly` `#ventasonline` `#emprendedorespy` `#negocioonline` `#paraguay` `#emprendimiento`

Rotate and mix in 1-2 topic-specific ones. Always include `#shoperly`.

## Style 2: Warm Illustration + Marker Text

Inspired by viral TikTok carousel creators (500K+ views). Personal, organic feel vs. Style 1's branded/corporate look.

### When to use
- Relatable, call-out style content ("Seguís vendiendo por DM?")
- Pain-point lists, "señales de que...", story-driven carousels
- When we want to feel like a person talking, not a brand advertising

### Background
- **One AI-generated warm illustration per carousel** (not per slide)
- Style: cozy anime/lo-fi aesthetic, warm golden light, desk scenes, packaging, phones
- Prompt keywords: "warm cozy illustration, golden sunset light, soft pastel, aesthetic lo-fi, digital painting, no text no words no letters"
- Model: `gpt-image-1`, size `1024x1536`, quality `high`
- Apply dark overlay `rgba(0,0,0,80)` for text contrast
- Same background used across all slides, text changes per slide

### Typography
- **Title font:** Permanent Marker (Google Fonts) — marker/handwritten feel
  - Hook text: 100px, outlined (5px black outline)
  - Slide titles: 80px
- **Subtitle/body font:** Caveat (Google Fonts) — casual handwriting
  - Size: 50-54px, outlined (3px)
- **Color palette:**
  - Primary text: white `(255, 255, 255)`
  - Accent/highlight: yellow `(255, 220, 60)` — used on key words, numbers, call-outs
  - Subtitle: warm white `(255, 240, 210)`
- **Text outline:** black `(0, 0, 0, 230)`, 5px thickness (3px for subtitles). NO drop shadow, use full outline for readability on any background.

### Hook slide formula
- **Lead with the call-out** (the thing that makes people feel seen)
- Call-out in big Permanent Marker, centered
- Key phrase in yellow (e.g. "por DM?")
- Listicle promise as subtitle in Caveat below
- Paraguay flag emoji (composited as PNG, 75x75px) next to punch line
- Max ~8 words in the main call-out

### Content slides
- Same background, dark overlay
- Slide number or signal word in yellow Permanent Marker
- Pain point/tip in white Permanent Marker
- Supporting text in Caveat
- Vary text position slightly per slide (not always centered) for organic feel

### CTA slide
- Same background, slightly stronger overlay `rgba(0,0,0,100)`
- "shoperly.app" in yellow Permanent Marker
- Subtitle in Caveat
- No pill button (doesn't fit the organic style)

### Technical notes
- Fonts stored in: `shoperly-tiktok-carousel2/pm.ttf` (Permanent Marker), `shoperly-tiktok-carousel2/caveat.ttf` (Caveat)
- Flag emoji PNG: `shoperly-tiktok-carousel2/flag_py.png` (160x160, Apple style)
- Pillow can't render emojis natively. Composite PNG images instead.
- Python/Pillow workflow (not Playwright/HTML like Style 1)
- Canvas: 1024x1536 (scales from gpt-image-1 output). Safe zones same ratios as Style 1.

### Caption style (same as Style 1)
- Casual Spanish with voseo
- 5 hashtags max on TikTok, always include #shoperly

## Style 3: White Minimal + Marker Text

Clean, text-only slides. Zero design, zero AI images. Fast to produce, easy to iterate.

### When to use
- Value-first content (tips, tutorials, how-tos)
- Positive/aspirational hooks
- High-volume posting (3x/week)

### Background
- Pure white `#ffffff`
- No images, no overlays, no gradients

### Typography
- **Font:** Permanent Marker (Google Fonts) for everything
- **Hierarchy:**
  - Hook headline: 88-92px
  - Slide number: 160px (yellow)
  - Slide title: 72px (dark)
  - Body text: 62px (#555555)
  - Subtitle/CTA text: 44-48px (#999999)
  - shoperly.app watermark: 28-30px (#dddddd)
- **All text centered**, one idea per slide
- No underlines, no boxes, no decorations

### Color palette
- Text: `#1a1a1a` (dark)
- Numbers/accents: `#FFDD04` (Shoperly yellow)
- Body text: `#555555`
- Subtitle: `#999999`
- Watermark: `#dddddd`
- CTA "shoperly.app": `#FFDD04` yellow

### Slide structure (5-6 slides)
1. **Hook:** Flag icon centered above, big call-out text, subtitle teasing value
2-5. **Content:** Big yellow number + title + 2-3 body lines. One point per slide.
6. **CTA:** Soft transition ("Ya tenés X. Ahora...") + shoperly.app in yellow

### Icons
- Paraguay flag (composited PNG, 55x55) centered above hook text
- No other icons or images

### Production
- Python/Pillow script
- Canvas: 1080x1920 (native TikTok)
- Fonts: `shoperly-tiktok-carousel2/pm.ttf` (Permanent Marker)
- Cost: $0 per carousel

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
