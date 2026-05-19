# StarBloom Consulting V2 — Deployment Guide

## GitHub Setup

1. **Create a new GitHub repo** at https://github.com/new
   - Name: `starbloomconsulting.com` (or `starbloom-v2`)
   - Visibility: Public (recommended — free tier for both Vercel and Netlify)
   - Do NOT initialize with README or .gitignore (we already have these)

2. **Push this local project to GitHub:**
   ```bash
   cd /home/starbloom/.openclaw/workspace/projects/starbloom-v2
   git remote add origin https://github.com/YOUR_USERNAME/starbloomconsulting.com.git
   git branch -M main
   git add .
   git commit -m "Phase 1: Foundation — Astro + Tailwind, semantic layout, AEO scaffolding"
   git push -u origin main
   ```

## Vercel Deployment (Recommended — Faster builds, better DX)

1. Go to https://vercel.com/new
2. Click "Import" → Select your GitHub repo
3. Vercel auto-detects Astro — no config changes needed
4. **Framework preset:** Astro (auto-detected)
5. **Build command:** `npm run build` (auto-detected)
6. **Output directory:** `dist` (auto-detected)
7. Click **Deploy**
8. After deployment, go to **Settings → Domains** and add `starbloomconsulting.com`
9. Point your DNS to Vercel's nameservers OR add a CNAME record:
   - **CNAME:** `@` → `cname.vercel-dns.com`
   - **CNAME:** `www` → `cname.vercel-dns.com`

## Netlify Deployment (Alternative)

1. Go to https://app.netlify.com/start
2. Connect GitHub → Select your repo
3. Netlify auto-detects Astro
4. **Build command:** `npm run build`
5. **Publish directory:** `dist`
6. Click **Deploy site**
7. Add custom domain under **Site settings → Domain management**

## Post-Deployment Verification

After deploying, verify these AEO-critical signals:
- [ ] `https://starbloomconsulting.com/` loads with valid JSON-LD (check via Google Rich Results Test)
- [ ] `meta description` renders correctly
- [ ] `og:title` and `og:image` resolve
- [ ] Canonical URL matches the live domain
- [ ] No console errors, no 404s
- [ ] HTTPS enforced (both Vercel and Netlify do this automatically)

## Local Development

```bash
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Production build
npm run preview   # Preview production build locally
```
