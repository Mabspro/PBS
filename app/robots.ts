import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/schedule',
        },
        sitemap: 'https://phoenixbookkeeping.com/sitemap.xml', // Placeholder URL - user will need to update domain
    }
}
