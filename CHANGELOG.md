# Changelog — DSB MUN 5.0

All notable changes to the DSB MUN 5.0 codebase will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [5.0.0] - 2026-07-30

### Added
- **Impeccable Design Framework Integration**: Created `PRODUCT.md` and `DESIGN.md` establishing anti-slop guidelines and project specifications.
- **Typography Stack Upgrade**: Integrated Google Fonts for `Bebas Neue` (Display Headlines) and `Inter` (Body Copy) alongside `Georgia` (Serif Accent).
- **Blocky Navy Bar Navigation**: Transformed sticky navigation into an opaque `#0E2A8A` solid navy bar with paper text links.
- **AirDrop Decline Easter Egg**: Interactive runaway decline button dodging behavior with retro macOS alert dialog and tumbling escape animation.
- **Mobile Touch & Accessibility**: Touch event listeners (`touchstart`, `touchmove`) for mobile dodge effects, ARIA tab roles, keyboard arrow navigation, and high-contrast dual-ring `:focus-visible` states.
- **Documentation Suite**: Added `README.md` landing page, `CONTRIBUTING.md`, `LICENSE`, `CHANGELOG.md`, and `.env.example`.

### Fixed
- **Mobile WebKit Image Spill**: Resolved aspect-ratio image spill on mobile Safari/Brave by setting explicit container heights (`height: 280px`, `max-width: 240px`, `overflow: hidden !important`).
- **Countdown Performance**: Replaced synchronous reflows (`void el.offsetWidth`) with `requestAnimationFrame` and DOM element caching to eliminate scrolling micro-stutter.
- **Schedule & Dress Code**: Corrected Finder schedule Day 2 ending time to 6:00 PM (Closing Ceremony & Awards) and updated dress code protocol (Day 1: Indian Traditional, Day 2: Western Formal).

---

## [4.0.0] - 2026-07-28

### Added
- **macOS Finder App UI**: Interactive multi-tab Finder window for Incharges, Committees, Schedule, and Dress Code.
- **Director General Message Card**: Added Director General (Plaksha) writeup card to leadership stack.
- **Website Creator Credits**: Added Aradhy Jain attribution card to Director Messages and footer legal text.

---

## [3.0.0] - 2026-07-25

### Added
- **Mac OS X 10.0 Window Chrome**: Retro brushed-metal window headers with `#FF5F57`, `#FEBC2E`, and `#28C840` traffic light dot controls.
- **Full-Color Leadership Cards**: Standardized leadership team photos in full color without monochrome or contrast filters.

---

## [2.0.0] - 2026-07-20

### Added
- **Committee Seals & Agendas**: Added 9 custom SVG navy committee seals and background guide agenda dropdowns.
- **Dress Code Protocol Section**: Detailed Indian Traditional vs Western Formal guidelines.

---

## [1.0.0] - 2026-07-15

### Added
- Initial conference landing page release for DSB International Public School Model United Nations 5.0.
