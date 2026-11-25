import type { Locale } from '~/data/site'

/** Remembers the locale a visitor picked by hand; it wins over browser language detection. */
export function usePreferredLocale() {
  return useCookie<Locale | null>('preferred_locale', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
}
