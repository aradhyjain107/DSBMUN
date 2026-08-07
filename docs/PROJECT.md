# Project Specification — DSB MUN 5.0 Landing Page Redesign

## Architecture & Overview
Single page web application (`index.html`, associated CSS, JS, and image assets) hosted at `/Users/aradhy/Desktop/MUN`.
Design aesthetic: Tactile warm zine / retro-tech paper zine aesthetic with Mac OS X 10.0 brushed metal window chrome primitives, rotated ±2° sticker tape titles, Bebas Neue headlines, Georgia italic accents, Inter body text, and cyan misregistration hover shifts.

## Code Layout
- `index.html` — Main HTML page containing structure and ARIA attributes
- `styles.css` / embedded CSS — Stylesheet containing design tokens, media queries, Mac OS X chrome, sticker tape, and typography
- `script.js` / embedded JS — Logic for rAF countdown timer, Finder tabs, AirDrop runaway button easter egg, modal alert
- `assets/` / images — Full-color leadership portraits, SVG seals, fingerprint SVG

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Exploration & Audit | Audit codebase, assets, fonts, structure | none | DONE |
| 2 | Design System & Substrate | Color tokens, typography, OS X chrome, sticker tape, navbar | M1 | DONE |
| 3 | Hero & Leadership Messages | Asymmetric stack, rAF timer, full-color portraits in OS X frames | M2 | DONE |
| 4 | Committees, Finder & Perks Card | 3-col grid, navy SVG seals, Finder tabs, AirDrop runaway button | M3 | DONE |
| 5 | Footer, Responsive & Accessibility | Aradhy Jain attribution, 0 horizontal scroll, 4.5:1 contrast | M4 | DONE |
| 6 | E2E Review & Forensic Audit | Verification, Challenger tests, Forensic Integrity Audit | M5 | DONE |

## Interface Contracts & Design Rules
- Background / Substrate: `#F2EBDC` (warm paper).
- Primary Navy: `#0E2A8A` (opaque navbar, headings, seals).
- Accents: `#C8281C` (red), `#B8D62E` (lime), `#F0B800` (yellow), `#1D70B8` (sky), `#00E5FF` (cyan ghost shift).
- Fonts: `Bebas Neue` (Display/Headlines), `Georgia` (italic accents), `Inter` (Body).
- UI Primitives: Mac OS X 10.0 window chrome (`#FF5F57`, `#FEBC2E`, `#28C840` traffic lights, hard shadows), Rotated ±2° sticker tape headers (hard 2px border, 3px box shadow).
- Terminology: "Leadership" (never "Secretariat"). Nav links to `#dresscode` for dress code section.
- Leadership photos: Full-color (no grayscale or monochrome filters).
