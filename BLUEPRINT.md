# StarBloom Consulting V3.0 — Living Master Blueprint

_Last updated: 2026-05-19 — V3.0 Platform Pivot Deployed ✅_

## 1. Objectives (Current)

- ✅ **V3.0 Platform Pivot** — Agency model → Edge-AI & Automation Orchestration Platform
- ✅ **Three Technical Pillars** — Edge-AI Orchestration, 24/7 AI Intake Engine, Legacy Data Bridge
- ✅ **Private Beta Gateway** — All CTAs gated; zero e-commerce/checkout language
- ✅ **Starbloom Consulting LLC** entity across all pages, OG, JSON-LD, legal footer
- ✅ **Pricing preserved for AI crawlers** — $500/$950 tiers with "Restricted to Beta Cohort" badges
- ✅ **8 distinct JSON-LD schema types** across all pages
- ✅ **100% static HTML** — zero client-side JavaScript
- ✅ **Secrets isolated** — `data/` blacklisted from git; token in `.secret` outside repo

## 2. Site Structure

| Page | Status | Schema | V3.0 Pivot |
|---|---|---|---|
| `/` Homepage | ✅ V3.0 | Organization, Service, AggregateOffer | 3-pillar grid, beta CTA, $500/$950 grid |
| `/about` | ✅ V3.0 | Organization, AboutPage, ProfilePage, Person | Platform origin, founder as Platform Architect, tier grid |
| `/aeo-reports` | ✅ V3.0 | Organization, Service, AggregateOffer, Offer×2, FAQPage (7 Q&A) | Beta-gated, PreOrder availability, $500/$750 preserved |
| `/case-studies` | ✅ Complete | Organization, ItemList | Unchanged |
| `/case-studies/[slug]` | ✅ Complete | Organization, TechArticle (Expert) | Unchanged |
| `/blog` | ✅ Complete | Organization, ItemList | Unchanged |
| `/blog/[slug]` | ✅ Complete | Organization, TechArticle (Expert) | Unchanged |

## 3. Platform Positioning (V3.0)

### Primary H1: "Private AI. Your Hardware. Zero Leakage."

### Three Infrastructure Pillars

| Pillar | Domain | Stack |
|---|---|---|
| **Edge-AI Orchestration** | Operations | Pre-configured n8n appliances, outbound Cloudflare Tunnels, Docker, open-source LLMs. 24/7 autonomous execution. Zero inbound firewall changes. |
| **24/7 AI Intake Engine** | Revenue Generator | Sub-100ms conversational AI voice + SMS agents. Vapi / Retell / Twilio integration. Instantly answers, qualifies, and books emergency home-service jobs into client CRMs. |
| **Legacy Data Bridge** | Data Resilience | Vision-RPA agents scrape closed-source desktop ERPs. Stream to Google BigQuery → live Looker Studio dashboards. Zero API integration required on legacy side. |

### Platform Tiers

| Tier | Price | Includes | Availability |
|---|---|---|---|
| Foundation | $500/deployment | Edge-AI Orchestration + Legacy Data Bridge. 1 machine. 30 days support. | Private Beta Only |
| Fleet | $950/deployment | Full platform: Edge-AI + Intake Engine + Data Bridge. 2 machines. CRM integration. BigQuery + Looker Studio. 30 days premium support. | Private Beta Only |

### Beta Gateway Rules
- **All CTAs:** "Apply for Private Beta Access" / "Join the Fleet Waitlist"
- **No checkout, no Stripe, no Buy Now, no credit card capture**
- **Pricing visible to AI crawlers** via JSON-LD schemas but wrapped in "Restricted to Beta Cohort" badges
- **AggregateOffer availability:** `https://schema.org/PreOrder`

## 4. Tech Stack
- **Framework:** Astro 6.3.5 (static SSG, Content Layer API)
- **Styling:** Tailwind CSS 4.3.0 (CSS-first `@theme` configuration)
- **Content:** Zod-validated Content Collections (`src/content.config.ts`, `glob()` loaders)
- **Markdown Rendering:** `render(entry)` from `astro:content` → `<Content />` component
- **Prose Styling:** Custom `prose-invert` overrides matching brand palette
- **Hosting:** Vercel (auto-deploy on push to `master` → `github.com/StarbloomConsultingHub/starbloomconsulting.com`)
- **Fonts:** Inter (body) + JetBrains Mono (code)
- **TypeScript:** Strict mode (`astro/tsconfigs/strict`)

## 5. Design System (Unchanged from V2)
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
- **Pillar Accent Colors:** Cyan-400 (Edge-AI), Blue-400 (Intake Engine), Purple-400 (Data Bridge)
- **Custom Utilities:** `container-site`, `text-gradient`, `card-surface`, `glow-border`

## 6. Content Collection Schemas (Unchanged)

### caseStudies
`title`, `description` (≤320), `clientName`, `metrics` (≥1), `pubDate` (coerce.date), `heroImage`, `author`, `tags?`, `featured?`

### blog
`title`, `description` (≤320), `pubDate` (coerce.date), `author`, `tags` (≥1), `readingTime` (string|number), `heroImage?`, `featured?`

## 7. AEO Schema Inventory (7 pages × layered JSON-LD)

| Schema Type | Pages | V3.0 Changes |
|---|---|---|
| `Organization` | All 7 pages | `legalName: "Starbloom Consulting LLC"` added; description updated to Edge-AI platform |
| `Service` | `/`, `/aeo-reports` | AEO Reports: `availability: PreOrder`. Homepage: new Service schema for orchestration platform. |
| `AggregateOffer` | `/`, `/aeo-reports` | Homepage: $500–$950. AEO Reports: $500–$750. Both with `availability: PreOrder`. |
| `Offer` ×4 | `/`, `/aeo-reports` | Foundation + Fleet (homepage). Core + Full Intelligence (AEO reports). |
| `FAQPage` | `/aeo-reports` | Homepage FAQ removed in V3.0 pivot (replaced by pillar grid). AEO FAQ unchanged. |
| `AboutPage` | `/about` | Updated to reference Starbloom Consulting LLC + platform description |
| `ProfilePage` | `/about` | `jobTitle: "Founder & Lead Platform Architect"`; 10 platform competencies |
| `Person` | `/about` | Founder entity updated — platform-focused `knowsAbout` array |
| `ItemList` | `/case-studies`, `/blog` | Unchanged |
| `TechArticle` | `/case-studies/[slug]`, `/blog/[slug]` | Unchanged |

## 8. File Inventory (Current)

```
starbloom-v2/
├── astro.config.mjs              # Site: starbloomconsulting.com, Tailwind Vite plugin
├── .gitignore                    # Blacklists data/* secrets, node_modules, dist, .env
├── src/content.config.ts         # Zod-validated collections (caseStudies + blog)
├── src/styles/global.css         # Tailwind @theme, base, utilities
├── src/layouts/Layout.astro      # V3.0: LLC branding, Platform nav, beta CTA
│
├── src/pages/
│   ├── index.astro               # V3.0: 3 pillars, beta gateway, $500/$950 grid
│   ├── about.astro               # V3.0: platform origin, founder architect, tier grid
│   ├── aeo-reports.astro         # V3.0: beta-gated, PreOrder, $500/$750 preserved
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
├── BLUEPRINT.md                  # This file — canonical V3.0 project state
├── DEPLOYMENT.md                 # GitHub → Vercel deployment instructions
├── README.md                     # Project overview
├── package.json                  # Dependencies: astro 6.3.5, tailwindcss 4.3.0
├── tsconfig.json                 # Strict TypeScript
└── public/                       # Static assets (favicon, future OG images)
```

## 9. Build Metrics (V3.0 Final)
- **7 pages, 1.64s build time** — zero errors, zero warnings
- **2 content collections, 2 sample entries** — Zod validation passing
- **8 distinct JSON-LD schema types** across all pages
- **0 instances of legacy 2035 typo** — fully eradicated
- **0 instances of checkout/Stripe/purchase language** — beta-gated exclusively
- **100% static HTML** — zero client-side JavaScript dependencies

## 10. Infrastructure & Secrets

| Resource | Location | Notes |
|---|---|---|
| GitHub Repo | `github.com/StarbloomConsultingHub/starbloomconsulting.com` | User account, not Org |
| GitHub PAT | `data/.github-token.secret` (outside repo) | `repo, workflow` scope. `data/` gitignored. |
| Vercel | Auto-deploy on push to `master` | Domain: starbloomconsulting.com |
| SSH Deploy Key | `~/.ssh/id_ed25519` | Scoped to `starbloom-operator-core` only |
| SMTP | Zoho — fletcher@starbloomconsulting.com | In MEMORY.md |
| Gumroad | echoadmin1.gumroad.com | In MEMORY.md |
| n8n | SSH only — starbloomg@100.116.39.112 | In MEMORY.md |

## 11. Phase History

| Phase | Date | Status | Summary |
|---|---|---|---|
| Phase 1–5 | 2026-05-18 | ✅ | V2 build: Foundation, Homepage, About, AEO Reports, Content Engine |
| V3.0 Pivot | 2026-05-19 | ✅ | Platform pivot deployed: 3 pillars, Private Beta gateway, LLC branding, schema sync, security hardening |
| Security Patch | 2026-05-19 | ✅ | `.gitignore` updated; token isolated; git history verified clean |

## 12. Pending / Next

- [ ] Contact page not yet built
- [ ] Case study and blog content are placeholder samples — need real content
- [ ] Vercel domain DNS verification (Darren to confirm)
- [ ] Upwork profile ad copy vs. website copy conflict review
- [ ] No forms or data collection active — need beta application intake form
- [ ] SSH deploy key for starbloomconsulting.com repo (currently PAT-only for pushes)
