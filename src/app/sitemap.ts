import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nabilmq.my.id/',
      lastModified: '2025-12-16',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}