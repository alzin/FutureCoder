import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
// createSharedPathnamesNavigation


export const locales = ['en', 'ar'];
export const localePrefix = 'as-needed';
export const defaultLocale = 'en'
export const pathnames = {
  '/': '/',
  // '/pathnames': {
  //   en: '/pathnames',
  //   ar: '/pfadnamen'
  // }
}

export type Locale = (typeof locales)[number];
export type Pathnames = keyof typeof pathnames;
export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });