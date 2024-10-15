import { MetadataRoute } from 'next'
import { baseUrl } from '@/constants/api'


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    ar: `${baseUrl}/ar`,
                },
            },
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en/blogs`,
                    ar: `${baseUrl}/ar/blogs`,
                },
            },
        },
        {
            url: `${baseUrl}/courses`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en/courses`,
                    ar: `${baseUrl}/ar/courses`,
                },
            },
        },
    ]
}