import { readdir } from 'node:fs/promises'
import { join, parse } from 'node:path'

export default defineEventHandler(async (event) => {
  const baseURL = 'https://salooneenachoudhury.com'

  const staticRoutes = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/timeline', changefreq: 'monthly', priority: 0.8 },
    { url: '/journeys', changefreq: 'monthly', priority: 0.9 },
    { url: '/achievements', changefreq: 'monthly', priority: 0.8 },
    { url: '/gallery', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.9 },
    { url: '/contact', changefreq: 'yearly', priority: 0.6 }
  ]

  const journeyRoutes = [1, 2, 3, 4, 5, 6].map(id => ({
    url: `/journeys/${id}`,
    changefreq: 'monthly',
    priority: 0.7
  }))

  let blogRoutes = []
  try {
    const blogDir = join(process.cwd(), 'content', 'blog')
    const files = await readdir(blogDir)
    blogRoutes = files
      .filter(f => f.endsWith('.md'))
      .map(f => ({
        url: `/blog/${parse(f).name}`,
        changefreq: 'monthly',
        priority: 0.7
      }))
  } catch {
    blogRoutes = [
      '/blog/first-journey-1989', '/blog/breaking-army-record', '/blog/australia-wild-encounters',
      '/blog/guinness-world-record-story', '/blog/partnership-that-conquered-world',
      '/blog/beating-british-army-record', '/blog/six-continents-countless-memories',
      '/blog/car-that-conquered-world', '/blog/fighting-for-recognition-guinness-battle'
    ].map(url => ({ url, changefreq: 'monthly', priority: 0.7 }))
  }

  const allRoutes = [...staticRoutes, ...journeyRoutes, ...blogRoutes]
  const today = new Date().toISOString().split('T')[0]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseURL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return sitemap
})
