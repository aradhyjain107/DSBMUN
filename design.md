# DSB MUN 5.0 — Website Design Specification

> **Read this file top-to-bottom before writing a single line of code or generating a single asset.**
> This is the design contract. Every choice below exists to keep the site from collapsing into
> generic AI-generated 2025 mush. If a decision isn't justified here, it's the wrong decision.

---

## 0. How to use this document

This spec is **implementation-agnostic**. It does not assume React, Next, Astro, Webflow, or
plain HTML. It is written so a competent building agent — in any tool — can produce the site
faithfully. The recommended stack and the recommended skills to install alongside this file
are at the bottom (§15, §16).

The doc is structured as:

| §  | What it gives you                                                                 |
| -- | --------------------------------------------------------------------------------- |
| 1  | The brief — what the site is, who it's for, what it must do                       |
| 2  | The core idea — the conceptual frame that holds every choice together             |
| 3  | Anti-slop guardrails — the explicit DO-NOT list, the most important section       |
| 4  | Visual DNA — the motifs extracted from the brochure                              |
| 5  | Color system — tokens, ratios, how each color is allowed to be used               |
| 6  | Typography — type stack, sizes, roles, fallbacks                                  |
| 7  | Layout & spacing — grid, gutters, density                                        |
| 8  | Imagery & halftone system — how to treat every photo                              |
| 9  | Iconography & UI primitives — the iOS / Mac OS / starburst vocabulary              |
| 10 | Motion system — principles, tokens, choreography                                  |
| 11 | Component library — every component the agent must build                         |
| 12 | Page-by-page map — brochure → site                                               |
| 13 | Content & copy — the actual text in the brochure                                  |
| 14 | Accessibility & performance floor                                                |
| 15 | Recommended skills — install these alongside this file                            |
| 16 | Recommended stack — when the agent is free to choose                              |

---

## 1. The brief

**What:** A single-domain marketing/registration site for **DSB MUN 5.0**, the fifth edition
of the Model United Nations conference hosted by DSB International Public School, **1–2 August
2026** (Saturday–Sunday), New Delhi area, India.

**Audience:** Indian high-school students (Grades 8–12), their parents, and faculty advisors.
They are 14–18, they grew up on Tumblr / BeReal / iOS 6, they already know what a "zine" feels
like, and they will smell "vibe-coded template" in two seconds.

**Primary job of the site:**

1. Sell the experience in the first 5 seconds (hero).
2. Communicate the structure (committees, schedule, dress code, fee, perks).
3. Drive to **two CTAs** and only two: (a) Register, (b) Contact the secretariat.
4. Be shareable as a single page on Instagram and WhatsApp.

**Tone of voice:** Confident, slightly subversive, warm. Not corporate. Not "empowering-gen-z"
either. More like: a senior who has run four of these and is too cool to oversell.

**Hard scope:**

- Single landing page is acceptable. Multi-page is also acceptable (one section per top-level
  nav item), but the hero must work as a standalone viewport.
- Mobile-first. 60%+ of the audience will see it on a phone.
- Must work without JavaScript for the static text content. Animations are an enhancement.

---

## 2. The core idea

> **Evolution for Revolution.**

The brochure's tagline is the spine of the design. It says: *the same energy that built the
internet and the same energy that built the United Nations are the same energy*. The site has
to feel like both at once.

Concretely, the design has to reconcile three tensions, all visible in the brochure:

| Tension                | Pole A (digital / alt)                           | Pole B (institutional / MUN)              |
| ---------------------- | ------------------------------------------------ | ----------------------------------------- |
| Mood                   | Tumblr-era zine, glitch, protest-poster          | UN press kit, formal committee emblems    |
| Type                   | Heavy condensed display, sticker-tape labels     | Italic serif headers, diplomatic body     |
| Texture                | Halftone dots, fingerprint swirls, offset print  | Clean navy ground, official seals         |
| Metaphor               | Mac OS / iOS chrome, iMessage cards, Photo Booth | Conference hall, parliamentary procedure  |
| Subject                | A movement, a counterculture                     | A procedure, a credentialed gathering     |

**Do not collapse either pole.** The site is interesting *because* it holds both. The most
common failure mode is to over-correct toward the institutional side and ship something that
looks like a generic school's annual-day website. The second most common failure is to
over-correct to the alt side and ship a Beige-iOS-template with a grain filter.

The visual test: if you showed the site to a 17-year-old, they would say it looks like
"that one senior who actually makes things." If you showed it to a 45-year-old MUN veteran,
they would say it looks like it knows what the Security Council is.

---

## 3. Anti-slop guardrails — read this twice

This section is non-negotiable. Every item below is a tell that the site was generated rather
than designed. **None of these may appear.**

### 3.1 Color tells

- **No purple-to-blue or pink-to-orange mesh gradients.** They are the #1 AI fingerprint.
- **No `linear-gradient(135deg, #6366f1, #8b5cf6)`** anything.
- **No glassmorphism** — no `backdrop-filter: blur(20px)` on translucent white panels, no
  glass cards floating over gradient backgrounds.
- **No dark mode with neon glow accents** — no `#0a0a0a` ground with `#00ffaa` glow buttons.
- **No generic "AI color palette"** — no teal/lime/electric-violet. No "modern SaaS gradient"
  backgrounds.
- **No gradient text.** Headlines are flat color. Period.
- **No "OKLCH perceptual" web-trend palettes** unless you can justify it inside the DNA.

### 3.2 Type tells

- **No Inter as the only typeface.** Inter is the default of 2024–2025 AI; using it alone
  guarantees the site looks generated. (Inter is fine as a *body* typeface — see §6 — but
  never as the only typeface.)
- **No Geist, no General Sans, no Satoshi, no "AI-favorite" typefaces** in display roles.
- **No variable font weight tricks** in display headlines. Display is one weight, one width.
- **No tight tracking + light weight on long headlines** — that's the Linear / Vercel template
  look. Use heavy weight + slightly negative tracking on display, or positive tracking on caps.
- **No identical card grids of rounded-2xl cards** all in a row. The brochure never did this.
  Break the grid on every page.

### 3.3 Layout tells

- **No three-column "features" grids** in the hero.
- **No hero with one big metric + three sub-metrics** in a row.
- **No "centered everything" pages.** The brochure is asymmetric and bleeds off edges. The
  site must too.
- **No equal-padding section wrappers.** Each section chooses its own padding rhythm.
- **No identical max-width containers** repeated down the page. Vary it.
- **No "sticky nav that's a frosted glass bar at the top."** The nav can be heavy, opaque,
  blocky — even a sticker.
- **No card-with-icon-at-top + headline + paragraph + button** pattern. The brochure doesn't
  use cards at all. Use posters, windows, torn paper, halftone panels instead.

### 3.4 Motion tells

- **No scroll-jacking** (no "scroll = drag a timeline" hijack).
- **No parallax-on-parallax-on-parallax** (no multi-layer transforms on scroll).
- **No bouncy/elastic easing** on UI elements. Easing is either `ease-out` (entry),
  `ease-in` (exit), or `ease-in-out` (state change) with custom cubic-bezier for character
  only — never `cubic-bezier(0.68, -0.55, 0.265, 1.55)`.
- **No fade-in-on-scroll that fires for every single element.** Be selective. Most of the
  page is static. Motion is punctuation.
- **No infinite-spin loader.** No skeleton shimmer. No pulse animation.
- **No 3D models floating in the hero.**
- **No Lottie confetti / sparkle / shine on scroll.**
- **No "scrolling marquee with words"** on every page. Use it once, if at all.
- **No hover effects that scale the element 1.05x.** Use color/rotation/reveal instead.

### 3.5 Component tells

- **No "shadcn default" look.** No `rounded-xl border bg-card text-card-foreground shadow-sm`
  applied everywhere.
- **No "screenshot mockup" in the hero** (laptop frame, phone frame, browser frame, unless
  the page is specifically about the brochure itself, which it's not).
- **No avatar grid with rounded squares** for the secretariat. The brochure uses halftoned
  portraits with bursts. Use that.
- **No "Loved by X+ delegates" social-proof bar** in the hero.
- **No chatbot widget** floating in the corner.
- **No cookie banner that takes a quarter of the viewport.** One small line at the bottom.

### 3.6 Copy tells

- **No "Empowering the next generation of leaders."** Cliché.
- **No "Dive into the experience."** No "Unlock your potential."
- **No "Where passion meets purpose."** No "Amplify your voice." No "Be the change."
- **No "Welcome to DSB MUN 5.0 — your journey begins here."** It begins on August 1st.
- Use the brochure's actual copy. It is already good. Specifically, the line that should
  run through the site like a thread is **"where change finds a voice"** and **"evolution
  for revolution."**

### 3.7 The "would I believe it if you told me AI made this?" test

Before shipping any section, run this test: show the rendered section to a friend for 2
seconds. If they say "is this from Figma Make / v0 / Bolt / Replit / Lovable / Canva?" —
delete it and redo it. The brochure was made in Canva. The website must not look like it
was.

---

## 4. Visual DNA — extracted from the brochure

These are the motifs. Every one of them must appear, evolved, on the site. They are not
decorations; they are the brand.

### 4.1 The halftone

A halftone is a pattern of black dots of varying size that, viewed at a distance, simulates
a continuous tone. It is the texture of newsprint, of 1990s magazine reproduction, of punk
zines, of Roy Lichtenstein paintings. The brochure uses it on doves, on hands, on school
photos, on group portraits, on UN building exteriors.

**The site must use halftone as a first-class texture**, not as a `mix-blend-mode` filter
slapped on a photo. Halftone is implemented as:

- An **SVG pattern** with `<circle>` elements of varying `r` (radius), tiled.
- A **CSS mask**: a halftone pattern used as a mask on top of a flat color.
- A **`<canvas>` shader** for the dynamic / interactive halftone that responds to mouse /
  scroll.
- A **PNG overlay** for static posters (exported at 2x from a generator, not from a Canva
  screenshot).

**The brief says: at least one halftone is animated in the hero — either a halftone dove that
shifts dot density on scroll, or a halftone school photo that breaks into dots and reforms.**

### 4.2 The starburst

A spiky 8–14-pointed star, irregular, hand-cut, like the "BAM!" panel in a 1960s comic or a
1990s ska-punk CD booklet. The brochure uses these in red, orange, lime green, blue, and
white. They sit behind text, beside text, on top of photos, as section dividers.

**The site uses starbursts as:**

- Section background panels (a giant lime-green burst behind the perks).
- Photo callouts (an orange burst behind a "Dress Code" headline).
- Buttons (a starburst-shaped button on at least one CTA — see §11.4).
- Animated entry — bursts rotate slightly (max ±6°), scale 0.94 → 1.04, on viewport enter.
- Hover targets — the burst's rotation is bound to mouse position within ±10°.

Starbursts are **never** perfectly regular. Each one is a path of varying point count (8, 10,
11, 12, 14) with slightly different spike lengths. Build a starburst generator (any language)
that takes `(pointCount, innerRatio, irregularity)` and emits an SVG path.

### 4.3 The dove

A peace dove in flight — halftoned, always in pairs or a single — is the unifying visual
symbol. The brochure places doves:

- Above the headline on the welcome page.
- Beside the itinerary.
- As a border accent on the registration page.
- In clusters on the thank-you page.

**The site uses the dove as:**

- A scroll-bound motif. A halftone dove drifts in parallax across the hero (translate-y
  on scroll, never scale).
- A section-end glyph. After each major section, a single small halftone dove marks the
  transition. Always paired with a starburst.
- A favicon. The site's favicon is a halftone dove head in a navy circle.

The dove is **only ever rendered in halftone or as a flat navy/white silhouette**. Never
photorealistic. Never a stock illustration.

### 4.4 The old-software chrome

The brochure is laced with screenshots of:

- **Mac OS X window chrome** (red/yellow/green traffic-light buttons, the brushed-metal
  titlebar of 10.0–10.3).
- **Photo Booth** (the floating window with "Effects" button and the camera icon).
- **iOS 6-era iMessage** notification card (white card, "MESSAGES" header, "now" timestamp).
- **iOS context menu** (the floating "Reply / Copy / Edit / Forward / Delete / More…" popover).
- **AirDrop card** (white card, bullet list, blue "Decline" / "Accept" buttons).
- **macOS Finder** (blue folder icon, white sidebars).
- **VS Code icon** (the blue square with the > < arrows).
- The **rainbow Apple logo** from Mac OS X 10.0 (the "Bondi" era).

**The site does not screenshot these.** It recreates them as **CSS / SVG** components that
feel native, not parodied. They become the actual UI containers for the content:

- The principal's message is presented inside a window chrome.
- The itinerary is presented inside an iMessage notification card.
- The "academic & skill-based benefits" list is presented inside an AirDrop card.
- The contact directory is presented inside a Finder window.

This is the move that lifts the site out of "zine about MUN" and into "MUN site that
remembers the era of zines." It must be done with restraint — these chrome elements appear
on **3–4 pages maximum**, never on every page.

### 4.5 The offset / misregistration print effect

The brochure deliberately shows a slight color-channel split on certain text and images —
cyan offset, magenta offset — as if the print run was off by 0.5mm. The Apple logo is
slightly cyan-shifted. The "DSB MUN 5.0" text on the cover has a faint red ghost to the
left.

**The site uses this as a hover state.** On hover of a primary display headline, a 2–4px
cyan or magenta ghost shifts in from one side, like a printing press drifting. On hover off,
it drifts back. This is the signature micro-interaction of the site. It must appear on the
hero headline, on the committee names, and on the "DSB MUN 5.0" lockup at minimum.

Implementation: a duplicate text layer behind the main text, with `mix-blend-mode: screen`
(or in dark mode, `multiply`), offset by 2–4px, with a `transform: translateX()` on hover.

### 4.6 The fingerprint / wood-grain texture

Two of the brochure pages use a giant concentric-circle fingerprint pattern as a full-bleed
background. It evokes both a fingerprint (identity, voice) and a wood-grain (warmth, school,
the building itself).

**The site uses this as a single hero-element**, either as the background of the hero
section, or as a transition between two sections. The fingerprint is rendered in
`var(--ink)` over a `var(--paper)` ground, animated to rotate 360° over 60s. It is *not*
used as a page background everywhere — once is enough.

### 4.7 The committee seal

The committee page (pages 7–8) uses a series of round navy-blue seals, each with a
white-on-navy emblem (a flame, a bird, a gavel, etc.) inside a wheat-laurel wreath. These
are essentially UN-style institutional emblems.

**The site recreates the seals** for the nine committees: UNHRC, UNSC, LOK SABHA, AIPPM,
UNGA, UNCSW, IP (International Press), IPL AUCTION, UNCLOS. They are SVG, navy on
translucent, with the grade band below the name. The seals **must look hand-drawn**, not
AI-generated — slightly varied stroke widths, a noise filter on the navy fill, hand-lettered
"UN" text in some, custom emblems in others.

### 4.8 The sticker / label tape

Some text in the brochure sits on a flat color block that is rotated 1–3° and has a slight
drop shadow — like a sticker slapped onto a notebook.

**The site uses this** for inline tags and category labels. The text on a sticker is set in
`var(--display)` weight, the sticker background is a flat color (red / yellow / green /
blue), and the rotation is randomized ±2° on load (so the page is slightly different every
reload — but consistent within a session).

### 4.9 The color block stack

The bottom of the cover and several section dividers stack the words "DSB" "MUN" "5.0" in
solid color blocks: red, lime green, blue, yellow. Each block is a different color, the
type is set inside the block, and the blocks are slightly offset from each other.

**The site uses this lockup** as the master wordmark for the event, appearing:

- In the hero (huge, filling 60% of the viewport height on desktop).
- In the nav (compact, 80px wide, fills the nav height).
- As the section-end glyph before the footer.
- In the OG image and favicon.

The color order in the lockup is fixed: **red DSB / lime MUN / blue 5.0** (with a yellow
slip in for variation on alternate uses). This is the one thing the brand "must" have.

---

## 5. Color system

### 5.1 Tokens

All colors are exposed as CSS custom properties. The agent should never hardcode a hex
in a component.

```css
:root {
  /* Paper & ink — the substrate */
  --paper:        #F2EBDC;   /* warm off-white, the "ground" of the brochure */
  --paper-warm:   #E8DCC0;   /* a touch darker, for sticky-paper sections */
  --paper-cool:   #D8DDE3;   /* a cool gray, for back-cover / contact pages */
  --ink:          #0B0B0F;   /* near-black, never pure */
  --ink-soft:     #2A2A30;
  --ink-fade:     #5A5A66;

  /* Brand primaries */
  --navy:         #0E2A8A;   /* UN institutional — the "diplomat" navy */
  --navy-deep:    #0A1F66;
  --navy-soft:    #1F3CB3;
  --sky:          #3F8EF0;   /* the "Dove" blue, the brand sky */
  --sky-soft:     #A9CBF5;
  --sky-pale:     #DCE9F8;

  /* Revolution accents */
  --red:          #C8281C;   /* brick, not fire-engine */
  --red-deep:     #8C1A12;
  --orange:       #E85A1A;   /* burnt, the "BAM!" color */
  --orange-soft:  #F1A06A;
  --lime:         #B8D62E;   /* chartreuse, the zine color */
  --lime-deep:    #7C9216;
  --yellow:       #F2D624;   /* warm sun */
  --yellow-soft:  #F8E78A;

  /* Functional */
  --teal:         #0E7F7F;   /* for itinerary accent */
  --plum:         #4A1F66;   /* very rare, for the SG message */
  --magenta:      #C8257A;   /* very rare, for hover ghosts */

  /* Glass tints (NOT for glassmorphism — for halftone overlays only) */
  --tint-cyan:    #00B8D4;
  --tint-magenta: #E91E63;
  --tint-yellow:  #FFEB3B;
}
```

### 5.2 Usage rules

- **The ground is always `--paper` or a paper variant.** Never pure white, never pure black.
- **The default text is `--ink` on `--paper`.** No exceptions unless the section specifically
  needs inverted text — in which case use `--paper` on `--navy`.
- **Display type is one of: `--ink`, `--navy`, `--red`, `--sky`.** Never `--ink-fade`, never
  `--ink-soft` for display.
- **Each color has a 60 / 30 / 10 budget** in any single viewport: 60% paper, 30% one accent
  (usually navy or sky), 10% one revolution accent (red, orange, lime, yellow). Do not mix
  all four revolution accents on the same screen.
- **The lockup colors are non-negotiable:** red / lime / blue, in that order, for the
  primary wordmark. A yellow block may be inserted between lime and blue in alternate
  lockups, never before red.
- **Dark sections use `--navy-deep` as the ground**, not pure black, and text in
  `--paper` or `--sky-soft`. Stars / bursts are `--yellow` or `--white`.
- **Halftone dot color is always `--ink`** over `--paper`, or `--paper` over `--navy`. No
  other color halftones.

### 5.3 Accessibility floor

All text/background combinations must pass **WCAG AA at the size used**:

- Display headlines (≥32px, weight ≥700) need **3:1** against the ground.
- Body text (14–18px) needs **4.5:1** against the ground.
- `--ink` on `--paper` is **14.7:1**. Safe.
- `--paper` on `--navy` is **12.4:1**. Safe.
- `--red` on `--paper` is **5.6:1**. Safe for display only, not for body.
- `--sky` on `--paper` is **2.9:1**. Display-only. Never use for body.
- `--yellow` on `--paper` is **1.5:1**. Decoration only. Never text.

If a combination fails, darken or lighten until it passes. Do not "rely on context."

---

## 6. Typography

### 6.1 The stack

The brochure uses what looks like a heavy condensed display (Compacta / Bebop family) for
display, an italic display serif for accent words like "Agenda" and "PERKS!", and a humanist
sans for body. The site should reproduce that hierarchy. Recommended pairing (any agent
can substitute if the licenses don't fit, but the *vibe* must hold):

| Role           | Family                                                                 | Weight   | Fallback                                              |
| -------------- | ---------------------------------------------------------------------- | -------- | ----------------------------------------------------- |
| Display        | **Druk** (or **Anton**, or **Bebas Neue** if no license)              | Wide     | `"Impact", "Haettenschweiler", "Arial Black", sans`   |
| Display italic | **GT Sectra Display Italic** (or **Tiempos Headline Italic**)          | Bold     | `"Georgia", "Times New Roman", serif`                 |
| Headline       | **Söhne Breit Halbfett** (or **Inter Tight Bold**)                     | Bold     | `"Helvetica Neue", "Arial", sans`                     |
| Body           | **Inter** (yes, Inter is allowed *only* in body)                       | Regular  | `"Söhne", "Helvetica Neue", "Arial", sans`            |
| Mono / code    | **JetBrains Mono**                                                     | Regular  | `"SF Mono", "Consolas", monospace`                    |

**Self-host all of these.** Do not pull from Google Fonts. Do not pull from a CDN. The page
must work offline, must not leak referrers, and must not shift on font-swap. Use
`font-display: optional` if you can tolerate a flash; otherwise `swap` with a sized
fallback (use `size-adjust` and `ascent-override` in `@font-face` to minimize CLS).

### 6.2 Scale

Modular scale, ratio 1.333 (perfect fourth) for display, 1.2 for body. Cap is 9xl (12rem
desktop / 7rem mobile) for hero, 6xl (5rem) for section titles, 3xl (2rem) for card titles,
1.125rem for body.

```
--fs-9xl: 12rem;     /* hero wordmark */
--fs-8xl: 9rem;
--fs-7xl: 6rem;      /* section openers */
--fs-6xl: 4.5rem;
--fs-5xl: 3rem;
--fs-4xl: 2.25rem;
--fs-3xl: 1.875rem;
--fs-2xl: 1.5rem;
--fs-xl:  1.25rem;
--fs-lg:  1.125rem;
--fs-md:  1rem;      /* body default */
--fs-sm:  0.875rem;
--fs-xs:  0.75rem;
```

On mobile (≤640px), cap hero at 4.5rem. Use `clamp()` for fluid sizing where it helps.

### 6.3 Rules

- **Display is set with letter-spacing -0.01em to -0.03em.** Never positive tracking.
- **All-caps display is set with letter-spacing +0.02em to +0.06em.**
- **Italic display serif ("Agenda", "PERKS!")** is used sparingly, only for single-word
  accents on a few section openers. Not for paragraphs.
- **Body has line-height 1.55, max line-width 68ch.**
- **No more than two typefaces visible at once on a single screen.** Sometimes one.
- **No ligatures off for body.** Default is fine. Display never uses ligatures.
- **No small caps as a substitute for proper hierarchy.** Use the actual size scale.

---

## 7. Layout & spacing

### 7.1 Grid

A 12-column grid with a 24px gutter on desktop, 16px on mobile. Container max-width is
**1440px**, but most sections do not use the full container — they bleed. Specifically:

- Hero: 100vw, 100svh, no container constraint.
- Body sections: 1200px max, centered, but allow children to break out.
- Committee index: a custom 3x3 grid (or 3-column wrapping) on desktop, 2 on tablet, 1 on
  mobile.
- Itinerary: 2-column on desktop, 1 on mobile.
- Director messages: photo + text split, 50/50 on desktop, stacked mobile.
- Footer: 4-column on desktop, 2 on tablet, 1 on mobile.

### 7.2 Spacing tokens

```
--s-1:  4px;
--s-2:  8px;
--s-3:  12px;
--s-4:  16px;
--s-5:  24px;
--s-6:  32px;
--s-7:  48px;
--s-8:  64px;
--s-9:  96px;
--s-10: 128px;
--s-11: 192px;
```

Vertical rhythm between major sections: `--s-9` (96px) on desktop, `--s-7` (48px) on mobile.
Within a section, vertical rhythm: `--s-6` (32px) between blocks, `--s-4` (16px) between
paragraphs.

### 7.3 Rules

- **No equal padding on all sides.** Top/bottom should differ from left/right. Hero has
  asymmetric padding: more top than bottom on desktop, mirrored on mobile.
- **No negative margins except for intentional bleed** (a photo that extends 80px past the
  container edge to break the grid).
- **No fixed pixel heights on sections** (other than the hero). Content dictates height.
- **Min touch target 44x44 px.** This includes the starburst button.

---

## 8. Imagery & halftone system

### 8.1 The four image states

Every photo on the site is in one of four states. No photo is shown "raw" (full color,
uncropped, unhalftoned).

| State         | Description                                                                                       | Used for                               |
| ------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **HALFTONE**  | Photo reduced to dots, 1-color over `--paper`                                                    | Headlines, mascots, the dove, hands    |
| **2-TONE**    | Photo reduced to 2 colors (`--ink` + `--paper` or `--navy` + `--paper`) via posterization          | Group photos, school building, stages  |
| **OFFSET**    | Full-color photo with a 2–4px cyan or magenta ghost layer at `mix-blend-mode: multiply`            | Action shots, "past MUN" gallery       |
| **RAW**       | Full-color, no filter, shown only inside a UI chrome (window, Photo Booth frame, iMessage card)   | Photos *of* people, presented as a "doc"|

The site must show at least one of each state in its first scroll viewport. This is the
quickest way to communicate the visual language.

### 8.2 The halftone generator

The agent must build (or include) a halftone generator that:

- Accepts an input image and a `(dotSize, angle, color)` parameter.
- Returns an SVG or canvas that approximates the image as a grid of circles whose radius
  encodes the local brightness.
- Works in the browser for live use (e.g. the interactive hero dove).
- Works in a build script for static export (every "HALFTONE" image on the site is
  pre-rendered, not done at runtime — except for the hero dove, which is live).

A simple approach: a `<canvas>` that, for each cell in a grid, draws a `<circle>` whose
radius is `(1 - averageBrightnessOfCell) * maxRadius`. Tile as a pattern, or render once
to a `<canvas>` and use as an image. For SVG, use the same idea with `<circle>` elements
and a `<pattern>`.

### 8.3 The photo policy

The brochure uses real photos: the school building, the principal, the SG, the secretariat
collage, action shots from past MUNs. The site should too — but with a clear, written photo
policy:

- The hero can use a *single* school photo, halftoned.
- The principal / SG / DG messages use the existing portraits, inside window chrome.
- The "Glimpses into past DSB MUNs" section uses 6–8 real action shots from prior years,
  shown in the **OFFSET** state, in a 3x2 grid with bursts between them.
- The secretariat collage is shown on the dedicated secretariat page, with the bursts
  replicated and the halftone applied.
- New photos taken for the site (e.g. detail shots of delegate kits, the venue) should be
  shot on film or processed in a halftone filter before placement.

**Stock photography is forbidden.** No Pexels / Unsplash / iStock. If you need an image and
don't have one, generate a poster, not a photo. If you must use a stock image, halftone it
until the source is unrecognizable.

---

## 9. Iconography & UI primitives

The site is built from a small set of *primitives* that appear again and again. They are
not just decorations; they are the grammar.

### 9.1 The window chrome

A draggable-looking Mac OS X 10.0–10.3 window. Renders as a header bar with three
traffic-light dots (red `#FF5F57`, yellow `#FEBC2E`, green `#28C840`) on the left, a
centered title in `--ink` (the page section name), and a subtle brushed-metal gradient
(`linear-gradient(180deg, #DDD, #BBB 50%, #C0C0C0 50%, #9A9A9A)`) on the bar. The
content sits in a `--paper` field below, with a 1px `--ink-soft` border and a 1px
`--paper` inner stroke for that 90s bevel. The window has a 2px black drop shadow
(`0 4px 0 rgba(0,0,0,1)`) — no blur. Hard shadow, no Gaussian.

This is used for: principal's message, SG's message, DG's message, contact directory.

### 9.2 The Photo Booth frame

Same window chrome, but the titlebar reads "Photo Booth" in small caps, and below the
content area is a thin `--paper-warm` strip with three icons on the left (effects, capture,
viewfinder), a red circular record button in the center, and an "Effects" button on the
right. The content above the strip is a `--paper` field holding a single photo. Used for:
principal portrait, SG portrait, DG portrait.

### 9.3 The iMessage notification card

A `--paper` rectangle, 1px `--ink-soft` border, with a 1px gray gradient header bar that
reads "MESSAGES" on the left and "now" on the right in `--ink-fade` small caps. Below the
header, a single line of body text in `--ink` at `--fs-xl`. A thin gray separator, then
the rest of the content. Used for: itinerary.

### 9.4 The iOS context menu

A small floating popover, 200px wide, 1px `--ink-soft` border, `--paper` ground, with
rows of menu items each with a small right-aligned icon (reply, copy, edit, forward,
trash). The trash icon is `--red`. The popover has a hard 2px shadow `0 4px 0 --ink`. Used
as: a floating tooltip / callout to direct attention to a particular UI element on the
page (e.g. "tap here to register"). Used **once or twice** on the site, not on every page.

### 9.5 The AirDrop card

A `--paper` rectangle with a 1px `--ink-soft` border, a header that reads "AirDrop" in
`--fs-md` weight 700, then a bullet list of items, then a footer with two buttons:
"Decline" in `--sky` and "Accept" in `--navy`. Used for: perks / benefits list.

### 9.6 The Finder window

A window chrome variant with a sidebar on the left (`--paper-cool` ground) listing three or
four items with small icons, and a main content area on the right (`--paper` ground)
showing a grid of "files" — each a small folder icon with a label. Used for: contact
directory.

### 9.7 The starburst

A 10–14-pointed SVG star, fill in any `--revolution` color, with a hard 2–4px `--ink`
stroke. Default size 200px. Build with the generator. The shape is **never** a perfect
symmetric star — vary spike lengths ±10%. The shape sits in a `<div>` with a 1px subtle
inner noise texture (a single 200x200 noise PNG with 5% opacity) for the "off-the-press"
feel.

### 9.8 The committee seal

A 200px circle, `--navy` ground, 4px `--paper` inner ring, 1px `--ink` outer ring. Inside,
a `--paper` emblem (drawn per committee, see §11.9), with a wheat-laurel wreath around it
in `--paper` at 70% opacity. The committee name is set in `--paper` small caps below the
emblem, with the grade band "(8-12)" or similar in `--sky-soft` underneath. See §11.9 for
the per-committee emblems.

### 9.9 The fingerprint / wood-grain

A full-bleed SVG background pattern of 8 concentric circles, slight off-center, rendered
in `--ink` at 15% opacity over `--paper`. Used as a single hero-element. Animated to
rotate 360° over 60s, slowly.

---

## 10. Motion system

Motion is the difference between a brochure and a website. The brochure is static. The
website has to feel *alive* without ever feeling busy. This section defines the rules.

### 10.1 Motion principles

1. **Motion is punctuation, not wallpaper.** Most of the page is static. When something
   moves, it has a reason: it entered, it responded, it changed state.
2. **Easing carries meaning.** `ease-out` = arrival. `ease-in` = departure. `ease-in-out`
   = state change. `linear` = only for continuous processes (rotating fingerprint, marquee).
3. **The offset print effect is the site's signature.** It is a hover micro-interaction,
   not a scroll animation. On hover of a primary display headline, a 2–4px cyan or magenta
   ghost shifts in from one side. On unhover, it shifts back. Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (a "smooth ease-out"), duration 220ms. The ghost is a duplicate of the
   text with `mix-blend-mode: screen` and `transform: translateX(-3px)` at rest, translating
   to `0` on hover. The main text translates `0` → `1px` in the opposite direction.
4. **The halftone is the hero motion.** In the hero, a halftone dove is rendered on a
   `<canvas>`, and its dot density shifts based on scroll progress. The dove is white dots
   on a navy ground, or black dots on a paper ground. As the user scrolls, the dots
   increase in radius by 0–20% — the dove "deepens." This is the only motion on the hero
   that runs continuously.
5. **Bursts rotate on enter.** When a section with a starburst enters the viewport, the
   burst rotates from -6° to its rest angle (0° by default, but each burst has a small
   randomized rest angle of ±3°) and scales from 0.94 to 1.0. Duration 480ms,
   `cubic-bezier(0.16, 1, 0.3, 1)`. Once entered, no further rotation unless hovered, in
   which case the burst rotates to follow the mouse within ±10° at 0.15 damping.
6. **The wordmark color blocks swap on hover.** In the "DSB MUN 5.0" lockup, the three
   color blocks (red / lime / blue) cycle colors on hover: red → orange, lime → yellow,
   blue → sky. Each block transitions 240ms ease-out.
7. **The committee seals have a "stamp" entry.** They scale from 1.4 to 1.0 with a slight
   6° rotation, in 380ms `cubic-bezier(0.34, 1.56, 0.64, 1)` (a *single* permitted
   "bounce" easing — and only because it is diegetic to a stamp pressing onto paper).
8. **No scroll-jacking. No parallax stacking beyond a single, mild y-translate on
   background elements.** The fingerprint background translates `y: scroll * 0.15`.
   Nothing else parallaxes.
9. **The marquee, if used, runs linearly at 60px/sec and pauses on hover.** It carries the
   tagline: "EVOLUTION FOR REVOLUTION · WHERE CHANGE FINDS A VOICE · DSB MUN 5.0 · "
   repeating. Used once, between the hero and the welcome message, in 96px display size,
   on a `--ink` ground with `--paper` text.

### 10.2 Duration tokens

```
--dur-instant: 80ms;     /* hover, color shift */
--dur-fast:    180ms;    /* micro state change */
--dur-base:    280ms;    /* default UI */
--dur-slow:    480ms;    /* section entry, burst rotate */
--dur-slower:  720ms;    /* committee seal stamp */
--dur-hero:    1200ms;   /* hero element first reveal */
```

### 10.3 Easing tokens

```
--ease-out-soft:  cubic-bezier(0.16, 1, 0.3, 1);    /* default enter */
--ease-in-soft:   cubic-bezier(0.7, 0, 0.84, 0);     /* default exit */
--ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);    /* state change */
--ease-stamp:     cubic-bezier(0.34, 1.56, 0.64, 1); /* seal entry, single use */
--ease-linear:    linear;                           /* only for marquee / fingerprint */
```

### 10.4 Stagger

When a list of items enters (e.g. 9 committee seals), stagger by `--s-3` (12px worth of
delay, in 30ms steps). Do not exceed 9 staggered items in a single viewport — beyond that
the page feels like a tour bus.

### 10.5 Reduced motion

`@media (prefers-reduced-motion: reduce)` disables:

- The continuous fingerprint rotation.
- The marquee.
- The interactive halftone in the hero (render to a static image instead).
- All transition durations become 0.01ms (effectively instant).
- The offset print ghost effect is kept (it's a hover micro-interaction, not a sustained
  motion, and `prefers-reduced-motion` is generally for vestibular triggers).

---

## 11. Component library

The agent must build these components. Each one is named, has props, and lives in its own
file. The visual spec for each is in the relevant section above. The list below just gives
you the inventory and what each is *for*.

### 11.1 `Wordmark`

The "DSB MUN 5.0" lockup. Three color blocks. Each block is a `<div>` with display type,
a background color, and a slight rotation. Props: `size: 'sm' | 'md' | 'lg' | 'hero'`,
`color: 'default' | 'swap'`, `asLink: boolean`. Used in the nav, hero, footer, and OG
image.

### 11.2 `Starburst`

A spiky SVG star. Props: `pointCount: number`, `innerRatio: number`, `irregularity: number`,
`color: TokenColor`, `stroke: boolean`, `rotate: number`, `asButton: boolean`. If
`asButton` is true, the burst is a button with a label centered. Used as background panel,
as callout, as button.

### 11.3 `HalftoneImage`

Renders an image as a halftone. Props: `src: string`, `dotSize: number`, `angle: number`,
`color: TokenColor`, `ground: TokenColor`, `interactive: boolean` (turns the canvas into a
mouse-tracking version). Used for the hero dove, the school building, the action shots.

### 11.4 `BurstButton`

A starburst-shaped button with a label centered. Props: `label: string`, `color: TokenColor`,
`href?: string`, `onClick?: () => void`, `size: 'sm' | 'md' | 'lg'`. The default primary
CTA is a red burst with white display text, label "REGISTER" or "Click here to register".
On hover, the burst rotates 6° in the direction of the mouse, and the label's color ghost
shifts in (the offset print effect, §10.1.3).

### 11.5 `WindowChrome`

The Mac OS window frame. Props: `title: string`, `children: ReactNode`, `variant:
'classic' | 'photobooth' | 'finder' | 'imessage'`, `sidebar?: ReactNode` (for finder).
Used for the principal's / SG's / DG's messages, the contact directory, the itinerary,
the perks list.

### 11.6 `OffsetText`

Display text with the offset print hover effect. Props: `children: ReactNode`, `as: 'h1'
| 'h2' | 'h3' | 'span'`, `size: keyof FontScale`, `color: TokenColor`, `ghostColor: 'cyan'
| 'magenta' | 'yellow'`. Used on every primary display headline and the lockup.

### 11.7 `Marquee`

A horizontally-scrolling text strip. Props: `text: string`, `speed: number` (px/sec),
`background: TokenColor`, `textColor: TokenColor`, `size: 'sm' | 'md' | 'lg'`. Used once.

### 11.8 `Fingerprint`

The full-bleed concentric-circle background. Props: `rotate: boolean` (default true),
`opacity: number` (default 0.15). Used once, in the hero.

### 11.9 `CommitteeSeal`

The navy circle with a white emblem. Props: `committee: 'UNHRC' | 'UNSC' | 'LOK_SABHA' |
'AIPPM' | 'UNGA' | 'UNCSW' | 'IP' | 'IPL_AUCTION' | 'UNCLOS'`, `gradeBand: '8-12' |
'9-12' | '6-8'`, `agenda: string`, `rotating: boolean` (for hover spin). The emblems:

| Committee   | Emblem (white on navy)                                  | Grade  |
| ----------- | ------------------------------------------------------- | ------ |
| UNHRC       | Flame inside laurel wreath                              | 8–12   |
| UNSC        | Dove inside laurel wreath                                | 9–12   |
| LOK SABHA   | Parliament building facade (Parliament of India dome)   | 9–12   |
| AIPPM       | Ashoka Lion Capital (national emblem)                   | 6–8    |
| UNGA        | UN world-map emblem inside wreath                       | 8–12   |
| UNCSW       | Venus / female symbol combined with equals sign         | 9–12   |
| IP          | Camera with "INTERNATIONAL PRESS" banner                | 8–12   |
| IPL AUCTION | Cricket bat silhouette, hand holding bat                | 6–8    |
| UNCLOS      | Anchor with chain, inside wreath                        | 6–8    |

Each emblem is hand-drawn as a 2-color SVG. Vary stroke width 1.5–2.5px per element for
the hand-drawn feel.

### 11.10 `Dove`

The peace dove silhouette. Props: `variant: 'halftone' | 'flat' | 'outline'`, `color:
TokenColor`, `size: number`, `drift: boolean` (subtle y-translate on scroll, max 16px).
Used as a section-end glyph, in the hero, and as the favicon.

### 11.11 `Sticker`

A small flat color block with display text, rotated ±2°. Props: `text: string`, `color:
TokenColor`, `textColor: TokenColor`, `asLink: boolean`. Used for inline tags and
category labels.

### 11.12 `iOSContextMenu`

The floating popover. Props: `target: RefObject`, `items: Array<{ label, icon, onClick }>`.
Used once or twice on the site to direct attention.

### 11.13 `SectionHeader`

A section opener with display title, optional italic accent word, and a starburst behind.
Props: `title: string`, `accent?: string`, `burstColor?: TokenColor`, `ground: 'paper' |
'navy' | 'paper-warm'`. Used at the top of every major section.

### 11.14 `ItineraryRow`

A single time slot. Props: `time: string`, `label: string`, `isBreak: boolean` (renders
with a different color). Used inside the iMessage card.

### 11.15 `CommitteeCard`

A card-ish element (NOT a rounded card — a poster). Props: `seal: CommitteeSealProps`,
`agenda: string`, `onClick?: () => void`, `expanded: boolean`. When collapsed, the seal
sits on a `--paper-warm` background with a hard `--ink` border; when expanded, the card
unfolds to show the agenda.

### 11.16 `ContactRow`

A single contact. Props: `name: string`, `role: string`, `phone: string`, `photo?:
string`. Used in the Finder window.

---

## 12. Page-by-page map — brochure → site

| §    | Brochure page(s)        | Site section                     | Component stack                                                           |
| ---- | ----------------------- | -------------------------------- | ------------------------------------------------------------------------- |
| 12.1 | Cover (p.1)             | Hero                             | Wordmark, Fingerprint, HalftoneImage (school building), Dove, BurstButton |
| 12.2 | Tagline                 | Marquee (one-time, between sections) | Marquee                                                                |
| 12.3 | Welcome / Quote (p.3)   | "Where change finds a voice"     | SectionHeader, OffsetText, WindowChrome (Photo Booth) holding photo       |
| 12.4 | The Secretariat (p.2)   | Secretariat collage              | HalftoneImage collage, multiple Starbursts, OffsetText                   |
| 12.5 | Past MUNs (p.4)         | Glimpses into past DSB MUNs      | 3x2 grid of HalftoneImage (action shots), Starbursts, SectionHeader       |
| 12.6 | Director messages (p.11–13) | Messages from leadership     | 3 stacked WindowChrome cards (Photo Booth variants)                       |
| 12.7 | Perks (p.5)             | What you get                     | AirDrop WindowChrome, bullet list, Sticker tags                           |
| 12.8 | Committees (p.7–8)      | Committees                       | 3x3 grid of CommitteeCard with CommitteeSeal                             |
| 12.9 | Itinerary (p.9)         | Schedule                         | iMessage WindowChrome with ItineraryRow list                              |
| 12.10 | Dress code (p.6)        | Dress code & registration        | Split: dress code block + QR + BurstButton(Register)                      |
| 12.11 | Thank you (p.10)        | Contact + footer                 | Finder WindowChrome with ContactRow list, footer with Wordmark            |

### 12.1 Hero — detailed

The hero takes 100vw, 100svh. Composition (desktop):

- Top-left: a small Sticker reading "DSB MUN 5.0" or just the Wordmark at `size: 'sm'`.
- Top-right: a small Starburst in `--red` with text "REGISTER →" as a BurstButton.
- Center-left: the OffsetText "EVOLUTION FOR REVOLUTION" in 96px display, multi-line, on
  `--paper`. On hover, the cyan ghost shifts in.
- Center: a HalftoneImage of the school building (interior, the courtyard from the cover),
  tilted -3°, with a `--ink` halftone on `--paper` ground. Interactive: dot density
  responds to mouse position over the image.
- Bottom-left: a SectionHeader-style small block with "1 — 2 AUGUST 2026" in display, on a
  small lime Sticker, with a hard shadow.
- Bottom-right: a small dove (halftone, navy) drifting slowly (16px y over 6s, linear,
  alternate).
- Background: the Fingerprint, full-bleed, rotating.

On mobile, stack the items vertically. The hero is 100svh on mobile, with the building
photo at the top (40svh) and the headline below (40svh), and the date sticker at the
bottom (20svh).

### 12.2 Marquee

Single line, `--ink` ground, `--paper` text, 96px display size, repeating the tagline
sequence. Sits between hero and welcome.

### 12.3 "Where change finds a voice"

A two-column split. Left column: the offset headline "where change finds a voice" with the
italic accent on "voice" (display italic serif, `--red` on `--paper`). Right column: a
Photo Booth window chrome containing the halftone school photo. Below the columns: a
two-paragraph welcome message in body type, `--ink` on `--paper-warm`.

### 12.4 Secretariat collage

A 100vw section with `--ink` ground (dark). The collage is a 4x4 grid of halftoned
portraits, each on a different revolution color block (red, orange, lime, yellow, sky,
magenta, plum, teal). On hover of any portrait, that portrait pops to full color, the
others dim to 30% opacity. The names of the secretariat are revealed on hover, set in
display type below each portrait, with the role in body type below that. A few large
starbursts sit behind the grid in `--lime` and `--orange`.

### 12.5 Glimpses into past DSB MUNs

A 3x2 grid of action shots, OFFSET state (full color, with a 3px cyan ghost on the bottom
and right). Between each photo, a starburst in `--yellow` or `--red` in random positions.
On hover, a photo rotates 2°, its ghost shifts to 6px, and a small caption appears below
in display type ("DSB MUN 4.0 — Opening Ceremony" etc.).

### 12.6 Director messages

Three stacked cards, each a Photo Booth window chrome. Card 1: Principal (Mr. Shiv
Sehgal). Card 2: Secretary-General (Ishika Dhamanda), with a Kofi Annan quote pulled
out as a large display block in `--red` on `--paper-warm`. Card 3: Director General
(Plaksha). The cards are full-bleed, stacked with no gap between them — they look like
pages of a magazine.

### 12.7 Perks

AirDrop WindowChrome. Inside, a bulleted list of perks: trophies, cash prizes,
skill-development, certificates, delegate kits, networking, global awareness, personal
development, recognition, debating & critical thinking. Each bullet has a small
checkbox-style icon (a 16px square with `--red` border and `--ink` check). Above the
list, a small Sticker in `--red` reading "PERKS!". To the right, a small Starburst in
`--lime` with text "Apply now".

### 12.8 Committees

A 3x3 grid of CommitteeCard. Each card shows the seal, the committee name, the grade
band, and the agenda (truncated to 2 lines, expandable on click). The grid sits on a
`--paper-warm` ground with hard 2px `--ink` dividers. The expanded state reveals the
full agenda and a "Background Guide coming soon" note.

### 12.9 Schedule

iMessage WindowChrome, full width. Inside, two sub-cards: "Day 1" and "Day 2", each a
list of ItineraryRow. The break rows (lunch, high tea, break) are in `--teal` and have
a small dove icon next to them.

### 12.10 Dress code & registration

A 2-column split. Left column: dress code block, two Sticker rows: "DAY 01: Indian
Traditionals" (red sticker) and "DAY 02: Western Formals" (lime sticker). Below: the
delegation fee, set in display: "₹1500 / per student" on a navy ground. Right column:
a QR code (real, pointing to a registration URL — placeholder until registration is
live) framed in a small window chrome, with a BurstButton "Click here to register"
below it.

### 12.11 Contact / footer

Finder WindowChrome. Left sidebar: a list of section names. Right content area: a grid
of "files" (ContactRow) — each is a folder icon with a name (Ms. Ritika Chandani —
President — +91 82169 00126, etc.) and a small dove next to the most important contact
(Secretary-General). On click of a file, an iOS context menu pops up with "Call /
Message / Copy number". Below the Finder window, a thin footer with the Wordmark at
`size: 'sm'`, an "@dsbmun" link, and a small note "© DSB International Public School.
Designed by the secretariat." A single small line of legal text in body type, no
cookie banner. The actual cookie / privacy policy lives on a separate /legal route or
in a modal opened from a footer link.

---

## 13. Content & copy

Use the brochure's exact text. Do not paraphrase. The brochure is well-written. Do not
"improve" it.

### 13.1 The lockup

> **DSB MUN 5.0**
> *Evolution for Revolution*

### 13.2 The tagline (the marquee line, repeated)

> EVOLUTION FOR REVOLUTION · WHERE CHANGE FINDS A VOICE · DSB MUN 5.0 ·

### 13.3 The dates

> 1 — 2 AUGUST 2026

### 13.4 The welcome

> **where change finds a voice**
>
> *change*
>
> We are delighted to announce the Fifth Annual Model United Nations Conference: DSBMUN
> 5.0, hosted by DSB International Public School on 1st and 2nd August, 2026.
>
> Building on the remarkable success of our previous four editions, DSBMUN 5.0 is set to
> be our most ambitious conference yet. This year's edition will once again bring together
> passionate young minds from diverse backgrounds, providing a dynamic platform to debate
> pressing global issues, exchange innovative ideas, and develop essential skills in
> diplomacy, negotiation, leadership, and public speaking.
>
> Over the years, DSBMUN has evolved into far more than a conference — it has become a
> community where students learn from one another, embrace diverse perspectives, and
> grow into informed global citizens. Here, every voice is valued, every opinion matters,
> and every delegate has the opportunity to make a meaningful impact.
>
> Whether you're stepping into a committee for the very first time or returning with
> experience, DSBMUN 5.0 promises an engaging and rewarding journey. Challenge your
> perspectives, collaborate with delegates from different schools, and experience the
> excitement of international diplomacy in an environment that encourages confidence,
> critical thinking, and respectful dialogue.
>
> We warmly invite all curious, passionate, and aspiring changemakers to be a part of
> this unforgettable experience. Join us as we celebrate diplomacy, foster meaningful
> conversations, and inspire the leaders of tomorrow.
>
> We look forward to welcoming you to DSBMUN 5.0 — where ideas are challenged, voices
> are heard, and leaders are made.

### 13.5 Perks (use as bullet list, in this order)

> - Trophies
> - Cash prizes
> - Skill-development
> - Winning and participation certificates
> - Delegate kits
> - Academic & Skill-Based Benefits
> - Global Awareness
> - Personal Development
> - Networking Opportunities & Recognition
> - Debating & Critical Thinking

### 13.6 Dress code

> **DAY 01:** Indian Traditionals
> **DAY 02:** Western Formals

### 13.7 Fee

> **DELEGATION FEE:** ₹1500 / per student

### 13.8 Itinerary

**Day 1**
- 8:30 am — Registrations
- 9:00 to 10 am — Opening Ceremony
- 10:30 to 11:30 am — Session 1
- 11:45 am to 1:15 pm — Session 2
- 1:15 to 2:30 pm — Lunch
- 2:30 to 4:30 pm — Session 3
- 4:30 pm — High tea
- 5 to 6 pm — Socials
- 6 pm — Departure

**Day 2**
- 8:30 am — Session 1
- 10:45 to 11:00 am — Break
- 11:00 am to 1 pm — Session 2
- 1 to 2:15 pm — Lunch
- 2:15 to 4 pm — Session 3
- 4 to 6 pm — Closing Ceremony

### 13.9 Committees and agendas

| Committee   | Grade  | Agenda                                                                                                          |
| ----------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| UNHRC       | 8–12   | Addressing Human Rights Violations and Civilian Protection in the Middle East Amid Escalating Regional Conflicts. |
| UNSC        | 9–12   | Addressing the Security Consequences of the Collapse of the Soviet Union, with Special Emphasis on Nuclear Proliferation and International Stability. |
| LOK SABHA   | 9–12   | Deliberation on Protecting India's Secular Framework Amidst Rising Communal Tensions and Political Polarisation. |
| AIPPM       | 6–8    | Deliberation on Tackling Corruption and Improving Government Transparency.                                       |
| UNGA        | 8–12   | Weaponising Peace: Examining the Use of Security Narratives, Counterterrorism, and Arms Control as Instruments of Global Power. |
| UNCSW       | 9–12   | Negotiating Trans Inclusion, Biological Essentialism, and Gender Autonomy within Contemporary Feminist Movements. |
| IP          | 8–12   | Covering committee proceedings through journalism, photography, and political caricature while ensuring accurate, engaging, and unbiased reporting. |
| IPL AUCTION | 6–8    | Mega Auction and Deliberation on the Increasing Prominence of League Cricket: Evaluating Its Impact on Player Priorities, International Representation, and the Future of the Sport. |
| UNCLOS      | 6–8    | Addressing Maritime Disputes and Ensuring Sustainable Use of Ocean Resources.                                    |

### 13.10 Director messages

Principal — Mr. Shiv Sehgal. Use the brochure's text verbatim, plus the closing line:
"We look forward to welcoming you to DSBMUN 5.0 — where ideas are challenged, voices are
heard, and leaders are made."

Secretary-General — Ishika Dhamanda. Lead with the Kofi Annan quote in display italic:
"More than ever before in human history, we share a common destiny. We can master it only
if we face it together." — Kofi Annan. Then the brochure's text. Close with the
philosophy: "Debate with Purpose. Discuss with Respect. Dialogue with Diplomacy." And
the closing line from the brochure.

Director General — Plaksha. Use the brochure's text. Close with: "Welcome to DSB MUN
5.0. Let's make it unforgettable."

### 13.11 Contact

> - Ms. Ritika Chandani — President — +91 82169 00126
> - Mr. Amit Giri — Teacher Coordinator — +91 98979 89982
> - Ishika Dhamanda — Secretary-General — +91 91491 51261
> - Plaksha — Director General — +91 81718 12324
>
> @dsbmun on Instagram

---

## 14. Accessibility & performance floor

- WCAG 2.2 AA at minimum. Every text/background combination passes.
- All interactive elements have a `:focus-visible` ring of 2px solid `--ink` (or `--paper`
  on dark ground) with a 2px offset. The ring is the only focus state.
- All images have `alt` text. Halftone images have `alt` describing the subject, not the
  filter ("Halftone dove, symbolizing peace", not "halftone image").
- All decorative starbursts have `aria-hidden="true"`.
- Color is never the only signal — the agenda, the dates, the names must all be readable
  without color.
- The site is keyboard-navigable end to end. Tab order follows visual order. The mobile
  menu is a `<dialog>` or a `details/summary` pattern, not a JavaScript-only trap.
- The site works at 200% browser zoom without horizontal scroll on mobile.
- The site passes Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95,
  SEO ≥ 95.
- The site is under 200KB of JavaScript on first load (excluding fonts and images).
  Halftone generation runs on idle (`requestIdleCallback`) or after first interaction.
- The site has a `<meta name="theme-color" content="#0E2A8A">` for the browser chrome.
- The site has a `<link rel="icon">` with the dove favicon.
- The site has OpenGraph and Twitter card meta with -tags, using the "DSB MUN 5.0" lockup as the
  image.

---

## 15. Recommended skills to install alongside this file

If the building agent supports the `npx skills` CLI, install **at minimum**:

```bash
# The anti-AI-slop backbone. Teaches the agent to recognize and avoid generic
# "AI made this" patterns. *Critical* for this project.
npx skills add pbakaus/impeccable --skill frontend-design
npx skills add pbakaus/impeccable --skill animate
npx skills add pbakaus/impeccable --skill teach-impeccable
npx skills add pbakaus/impeccable --skill critique
npx skills add pbakaus/impeccable --skill ai-slop-remover

# Motion design fundamentals. Choreography, easing, timing.
npx skills add LottieFiles/motion-design-skill

# UI/UX audit, accessibility, typography.
npx skills add mblode/agent-skills --skill ui-design
npx skills add mblode/agent-skills --skill ui-animation
npx skills add mblode/agent-skills --skill typography-audit
npx skills add mblode/agent-skills --skill ui-audit
npx skills add mblode/agent-skills --skill ux-audit

# Optional: presentation / motion systems for the marquee / hero choreography.
npx skills add guilhermemarketing/esc-skills --skill animation-systems
```

If the agent doesn't support the CLI, **read at least the `pbakaus/impeccable` repo's
SKILL.md** for the anti-pattern list and apply it manually. The anti-patterns there are
the same anti-patterns listed in §3 of this document, expanded.

---

## 16. Recommended stack

If the building agent is free to choose, this is the stack that fits the spec best:

- **Framework:** Next.js 15 (App Router) or Astro. Astro if you want less JS by default;
  Next if you want the most flexibility for the interactive halftone.
- **Styling:** Tailwind v4 with a custom config (no `@tailwindcss/typography`, no
  shadcn). Define the design tokens in `@theme` and use them via `var()` references.
  Hand-write the components — do not pull a component library.
- **Animation:** Framer Motion (now `motion`) for component-level animation. GSAP for
  the scroll-bound hero choreography and the marquee. Lottie for the floating dove
  sprite (or hand-animate it — no Lottie required).
- **Halftone:** A hand-rolled canvas/SVG generator. No library — none of the
  halftone-shader libraries on npm produce the right dot shape and density curve.
- **Fonts:** Self-hosted via `@fontsource` packages. No Google Fonts CDN.
- **Images:** `next/image` or Astro's `<Image>`. Pre-generate halftone variants in a
  build step.
- **Forms:** Native HTML + a tiny client-side submit handler. No Formik, no React Hook
  Form. The site has one form (registration), and it does not need state management.
- **Analytics:** Plausible or Umami. No Google Analytics.

If the agent is not free to choose (e.g. it is locked into a specific builder), ignore
this section and apply the design spec to whatever stack is available. The design is
stack-agnostic.

---

## 17. The 30-second test

When the site is built, run this test:

1. Show the hero to a 17-year-old for 5 seconds. Ask: "what does this organization do?"
   They should say "some kind of student UN thing" without prompting.
2. Show the hero to a 45-year-old who has been to a MUN. Ask: "would you register your
   kid for this?" They should say yes within 10 seconds.
3. Ask a designer friend (who has not seen this spec) to look at the site for 30
   seconds. Then ask: "is this AI-generated?" They should hesitate, then say "no" or
   "I can't tell." If they immediately say "yes, that's an AI site," the design failed.
4. Open the site on a mid-range Android phone on a slow 3G connection. The first
   meaningful paint should be under 3 seconds. The halftone canvas may load later; the
   headline, the date, and the primary CTA must be visible immediately.

If any of these four tests fail, the design has not been followed. Go back to §3.

---

*End of spec. Build the site.*
