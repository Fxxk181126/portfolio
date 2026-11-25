import { defaultLocale, locales } from '~/data/site'
import type { Locale, LocaleDefinition } from '~/data/site'

const definition = (code: Locale): LocaleDefinition => locales[code]

export const localePath = (code: Locale): string => definition(code).path

export const localeLanguage = (code: Locale): string => definition(code).language

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && value in locales

/**
 * Whether a first visit to `/` follows the browser language. Off, `/` always shows the default locale until
 * the visitor picks a language; on, browsers that list no Chinese variant are sent to English instead.
 */
export const autoDetectLocale = false

/** Resolves the locale named by a route's `locale` segment, or null when the segment names none. */
export function localeFromSegment(segment?: string | string[]): Locale | null {
  const path = Array.isArray(segment) ? `/${segment.join('/')}` : `/${segment ?? ''}`
  return Object.values(locales).find((item) => item.path === path)?.code ?? null
}

/** Chooses the locale for a first visit from an Accept-Language header or a navigator.languages list. */
export function negotiateLocale(languages: string | undefined): Locale {
  // Every tag counts, without region or quality: "en-US,en,zh-CN" is a reader of Chinese.
  const tags = (languages ?? '')
    .split(',')
    .map((entry) => (entry.split(';')[0] ?? '').trim().toLowerCase())
  // Browsers that list a Chinese variant, or no preference at all, get the default; everyone else gets English.
  const readsChinese = tags.some((tag) => tag.startsWith('zh'))
  const prefersOther = tags.some((tag) => tag && tag !== '*')
  return !readsChinese && prefersOther ? 'en' : defaultLocale
}
