// import {notFound} from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
// const locales = ['en', 'de'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(await import(`./data/lang/${locale}/homePage.json`)),
      ...(await import(`./data/lang/${locale}/coursesPage.json`)),
      ...(await import(`./data/lang/${locale}/coursePage.json`)),
      ...(await import(`./data/lang/${locale}/blogsPage.json`)),
      ...(await import(`./data/lang/${locale}/blogPage.json`)),
      ...(await import(`./data/lang/${locale}/bookingFreePage.json`)),
      ...(await import(`./data/lang/${locale}/shared.json`)),

    },
  };
});