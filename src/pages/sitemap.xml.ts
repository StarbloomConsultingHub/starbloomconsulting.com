import type { APIRoute } from 'astro';

const PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' as const },
  { path: '/about', priority: 0.8, changefreq: 'monthly' as const },
  { path: '/pricing', priority: 0.7, changefreq: 'monthly' as const },
  { path: '/apex-core', priority: 0.8, changefreq: 'weekly' as const },
  { path: '/aeo-reports', priority: 0.6, changefreq: 'weekly' as const },
  { path: '/contact', priority: 0.5, changefreq: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changefreq: 'monthly' as const },
  { path: '/terms', priority: 0.3, changefreq: 'monthly' as const },
  { path: '/blog/why-sovereign-hardware-matters', priority: 0.6, changefreq: 'monthly' as const },
  { path: '/case-studies/starbloom-aeo-pipeline', priority: 0.6, changefreq: 'monthly' as const },
];

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = 'https://starbloomconsulting.com';
  const today = new Date().toISOString().split('T')[0];

  const urls = PAGES.map(p => `
  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`).join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`,
    {
      status: 200,
      headers: { 'Content-Type': 'application/xml' }
    }
  );
};
