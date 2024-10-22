import createMiddleware from 'next-intl/middleware';
import { localePrefix, defaultLocale, locales, pathnames } from './navigation';


export default createMiddleware({
  // localePrefix,
  locales,
  defaultLocale,
  pathnames

});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};