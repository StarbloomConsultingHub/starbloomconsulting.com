# StarBloom Consulting V2 — Living Master Blueprint

_Last updated: 2026-05-18 — All Phases Complete ✅_

## 1. Objectives (Achieved)
- ✅ **Maximize machine-readability** for Answer Engines — 8 distinct schema types across all pages
- ✅ **Fix legacy trust leaks** — 2035 typo eliminated; `foundingDate: "2025"`; footer `© 2026` dynamic
- ✅ **Clear software-only messaging** — "$950, private AI on your hardware"
- ✅ **Productized B2B service** — A.P.E.X. Site Diagnostic Reports, $500–$750
- ✅ **Content Engine** — Zod-validated Markdown collections, TechArticle/ItemList schemas, prose rendering

## 2. Site Structure

| Page | Status | Schema |
|---|---|---|
| `/` Homepage | ✅ Complete | Organization, ContactPoint, FAQPage (8 Q&A) |
| `/about` | ✅ Complete | Organization, AboutPage, ProfilePage, Person (founder, 9 competencies) |
| `/aeo-reports` | ✅ Complete | Organization, Service, AggregateOffer, Offer×2, FAQPage (7 Q&A) |
| `/case-studies` | ✅ Complete | Organization, ItemList |
| `/case-studies/[slug]` | ✅ Complete | Organization, TechArticle (Expert) |
| `/blog` | ✅ Complete | Organization, ItemList |
| `/blog/[slug]` | ✅ Complete | Organization, TechArticle (Expert) |

## 3. Tech Stack
- **Framework:** Astro 6.3.5 (static SSG, Content Layer API)
- **Styling:** Tailwind CSS 4.3.0 (CSS-first `@theme` configuration)
- **Content:** Zod-validated Content Collections (`src/content.config.ts`, `glob()` loaders)
- **Markdown Rendering:** `render(entry)` from `astro:content` → `<Content />` component
- **Prose Styling:** Custom `prose-invert` overrides matching brand palette
- **Hosting:** Vercel (primary) or Netlify — free tier, GitHub CI/CD
- **Fonts:** Inter (body) + JetBrains Mono (code)
- **TypeScript:** Strict mode (`astro/tsconfigs/strict`)

## 4. Design System
- **Surface Dark:** `#0a0f1a` → slate-950
- **Surface Mid:** `#0f1729` → slate-900
- **Surface Card:** `#152033` → slate-850
- **Surface Raised:** `#1a2744` → slate-800
- **Border Subtle:** `#1e3255` → slate-700
- **Brand Blue:** `#3b82f6` → accent
- **Brand Glow:** `#60a5fa` → accent-glow
- **Brand Gradient:** blue-300 `#93bbfd` → cyan-400 `#22d3ee`
- **Text Primary:** `#f8fafc` → white-soft
- **Text Muted:** `#94a3b8`
- **Custom Utilities:** `container-site`, `text-gradient`, `card-surface`, `glow-border`

## 5. Content Collection Schemas

### caseStudies
`title`, `description` (≤320), `clientName`, `metrics` (≥1), `pubDate` (coerce.date), `heroImage`, `author`, `tags?`, `featured?`

### blog
`title`, `description` (≤320), `pubDate` (coerce.date), `author`, `tags` (≥1), `readingTime` (string|number), `heroImage?`, `featured?`

## 6. AEO Schema Inventory (7 pages × layered JSON-LD)

| Schema Type | Pages | Description |
|---|---|---|
| `Organization` | All 7 pages | Global (Layout.astro): name, url, foundingDate 2025, ContactPoint |
| `ContactPoint` | All 7 pages | Sales contact point within Organization |
| `FAQPage` | `/`, `/aeo-reports` | 8 Q&A (homepage) + 7 Q&A (AEO reports) |
| `AboutPage` | `/about` | About page entity, references Organization |
| `ProfilePage` | `/about` | Person entity (Darren): 9 knowsAbout, worksFor Organization |
| `Person` | `/about` | Founder entity with jobTitle, description, competencies |
| `Service` | `/aeo-reports` | A.P.E.X. Site Diagnostic Reports, provider Organization |
| `AggregateOffer` | `/aeo-reports` | lowPrice $500, highPrice $750, offerCount 2 |
| `Offer` ×2 | `/aeo-reports` | Core Diagnostic + Full Intelligence, individual pricing |
| `ItemList` | `/case-studies`, `/blog` | Index pages with ListItem → Article per entry |
| `TechArticle` | `/case-studies/[slug]`, `/blog/[slug]` | Expert proficiencyLevel, publisher Organization, author Person |

## 7. File Inventory (Complete)

```
starbloom-v2/
├── astro.config.mjs              # Site: starbloomconsulting.com, Tailwind Vite plugin
├── src/content.config.ts         # Zod-validated collections (caseStudies + blog)
├── src/styles/global.css         # Tailwind @theme, base, utilities
├── src/layouts/Layout.astro      # Global wrapper: header, main, footer, head slot
│
├── src/pages/
│   ├── index.astro               # Homepage: hero, 3-step, FAQ (8), CTA
│   ├── about.astro               # About: origin, founder, credentials, values
│   ├── aeo-reports.astro         # A.P.E.X. landing: tiers, use cases, FAQ (7)
│   ├── case-studies/
│   │   ├── index.astro           # Index: sorted cards, ItemList schema
│   │   └── [slug].astro          # Dynamic: render(entry) → TechArticle
│   └── blog/
│       ├── index.astro           # Index: sorted cards, ItemList schema
│       └── [slug].astro          # Dynamic: render(entry) → TechArticle
│
├── src/content/
│   ├── case-studies/
│   │   └── hvac-route-optimization.md   # Sample: 38% fuel reduction, 22-vehicle fleet
│   └── blog/
│       └── why-sovereign-hardware-matters.md  # Sample: cloud vs private AI argument
│
├── BLUEPRINT.md                  # This file — canonical project state
├── DEPLOYMENT.md                 # GitHub → Vercel/Netlify deployment instructions
├── package.json                  # Dependencies: astro 6.3.5, tailwindcss 4.3.0
├── tsconfig.json                 # Strict TypeScript
└── public/                       # Static assets (favicon, future OG images)
```

## 8. Build Metrics (Final)
- **7 pages, 1.82s build time** — zero errors, zero warnings
- **2 content collections, 2 sample entries** — Zod validation passing
- **8 distinct JSON-LD schema types** across all pages
- **0 instances of legacy 2035 typo** — fully eradicated
- **100% static HTML** — zero client-side JavaScript dependencies

## 9. Phase History

| Phase | Date | Status | Summary |
|---|---|---|---|
| Phase 1 | 2026-05-18 | ✅ | Foundation: Astro + Tailwind + Layout + design system + deployment guide |
| Phase 2 | 2026-05-18 | ✅ | Homepage: Hero ($950), 3-step process, FAQ Repeater (8), FAQPage schema |
| Phase 3 | 2026-05-18 | ✅ | About: Origin, Founder Darren, credentials, values, AboutPage + ProfilePage schemas |
| Phase 4 | 2026-05-18 | ✅ | AEO Reports: Tier comparison ($500/$750), Service + AggregateOffer + 2 Offers |
| Phase 5 | 2026-05-18 | ✅ | Content Engine: Collections + Zod + glob loaders, 4 dynamic routes, ItemList + TechArticle |

**All 5 phases complete. Project ready for GitHub deployment.**
