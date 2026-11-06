# Haworth Dental: design system (mock-up / proof of concept)

Direction: calm, upscale, boutique family dentistry. Quiet navy and white, serif headlines, hairline detail,
one restrained gold accent. Not based on a reference library; derived from the practice's own logo and
the decisions made while building this site.

## Color
| Token | Value | Role |
|---|---|---|
| `--navy` | `#0E4271` | Primary: buttons, links, header bar, bands |
| `--navy-deep` | `#0A3157` | Dark bands, footer, pill lists |
| `--slate` / `--slate-deep` | `#7B9ABC` / `#5F7FA3` | Eyebrow labels, secondary text on light |
| `--mist` | `#EEF3F8` | Alternate section background |
| `--line` | `#D6E0EB` | Hairlines and dividers |
| `--ink` / `--text` | `#1F2D3A` / `#3A4856` | Headings / body text |
| `--gold` / `--gold-deep` | `#C8A45E` / `#A07F3A` | The single accent: hairlines, diamonds, numerals. Never for buttons or large fills |

Text on white or mist is at least 4.5:1. Gold is decorative only (never the only carrier of meaning).

## Typography
- Display and quotes: Cormorant Garamond 500/600 (self-hosted).
- UI and body: Jost 400/500/600 (self-hosted).
- Headlines clamp roughly 2rem to 4rem, line-height 1.1 to 1.2. Body 1.0625rem / 1.7.
- Eyebrows and labels: Jost 500, 0.72rem, letter-spacing 0.26em, uppercase, slate-deep.
- Use lining numerals (`font-variant-numeric: lining-nums`) wherever numbers are shown in the serif.

## Shape, depth, spacing
- Corners: square to 2px for cards and frames; pills only for the benefit list. No heavy rounding.
- Depth: soft, long, low-opacity navy shadows (about `0 30px 60px -36px` at 0.35 to 0.5) plus a 1px hairline border. No hard top bars.
- Section spacing `clamp(52px, 7vw, 96px)`. Content width about 1140px.
- Signature details: gold hairline (28 to 46px) beside labels and under headings, small rotated-square gold diamonds as connectors, white mat plus navy line plus gold outer line around hero photos.

## Components
- Buttons: light (white on navy bands), outline (white border on dark), solid navy. Visible focus ring. Few CTAs; "Book a visit" appears only where it helps.
- Cards: hairline border, near-white gradient, lift 6 to 8px on hover. Reveal on scroll with a staggered fade-up.
- Header: white logo block flush left, navy bar, pulsing glow at the flower centre.

## Imagery
- Real practice photos first (office, Dr. Lebel). Stock images are placeholders and need licensing before launch.
- Photos framed in arches or squared frames with the layered border. Upscaled and cleaned, never stretched.

## Motion
- Slow and quiet: 0.5 to 0.9s eases, 20 to 22s drifts. All motion off under `prefers-reduced-motion`.
