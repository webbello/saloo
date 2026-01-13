export default defineEventHandler(async (event) => {
  const baseURL = 'https://saloo-neena.com' // Replace with your actual domain
  
  const routes = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/timeline', changefreq: 'monthly', priority: 0.8 },
    { url: '/journeys', changefreq: 'monthly', priority: 0.9 },
    { url: '/journeys/1', changefreq: 'monthly', priority: 0.7 },
    { url: '/journeys/2', changefreq: 'monthly', priority: 0.7 },
    { url: '/journeys/3', changefreq: 'monthly', priority: 0.7 },
    { url: '/journeys/4', changefreq: 'monthly', priority: 0.7 },
    { url: '/journeys/5', changefreq: 'monthly', priority: 0.7 },
    { url: '/journeys/6', changefreq: 'monthly', priority: 0.7 },
    { url: '/achievements', changefreq: 'monthly', priority: 0.8 },
    { url: '/gallery', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.9 },
    { url: '/blog/first-journey-1989', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/breaking-army-record', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/australia-wild-encounters', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/guinness-world-record-story', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/partnership-that-conquered-world', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/beating-british-army-record', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/six-continents-countless-memories', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/car-that-conquered-world', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/fighting-for-recognition-guinness-battle', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'yearly', priority: 0.6 }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseURL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return sitemap
})
