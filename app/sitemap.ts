import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://phoenixbookkeeping.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // /schedule is private, so we exclude it from sitemap
    ]
}
