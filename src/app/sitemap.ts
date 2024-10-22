import { MetadataRoute } from 'next'
import { baseUrl } from '@/constants'


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
        {
            url: `${baseUrl}/login`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en/login`,
                    ar: `${baseUrl}/ar/login`,
                },
            },
        },
        {
            url: `${baseUrl}/booking-free`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en/booking-free`,
                    ar: `${baseUrl}/ar/booking-free`,
                },
            },
        },
    ]
}


// import {MetadataRoute} from 'next';
// import {host} from '@/config';
// import {Locale, getPathname, routing} from '@/i18n/routing';

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [getEntry('/'), getEntry('/pathnames')];
// }

// type Href = Parameters<typeof getPathname>[0]['href'];

// function getEntry(href: Href) {
//   return {
//     url: getUrl(href, routing.defaultLocale),
//     alternates: {
//       languages: Object.fromEntries(
//         routing.locales.map((locale) => [locale, getUrl(href, locale)])
//       )
//     }
//   };
// }

// function getUrl(href: Href, locale: Locale) {
//   const pathname = getPathname({locale, href});
//   return host + pathname;
// }