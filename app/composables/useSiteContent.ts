import {
  aboutParagraphs,
  defaultLocale,
  experienceItems,
  locales,
  navigationItems,
  projectItems,
  profile,
  siteMeta,
  siteUrl,
  socialLinks,
  ui,
  writingItems,
} from '~/data/site'
import type { Localized, Locale, Resolved } from '~/data/site'
import { localeFromSegment, localeLanguage, localePath } from '~/utils/locale'

const isLocalized = (value: unknown): value is Localized<unknown> =>
  typeof value === 'object' && value !== null && 'zh' in value && 'en' in value

function localize<T extends object>(source: T, locale: Locale): Resolved<T> {
  return Object.fromEntries(
    Object.entries(source).map(([key, field]) => [key, isLocalized(field) ? field[locale] : field]),
  ) as Resolved<T>
}

export function useSiteContent() {
  const route = useRoute()
  const locale = computed(() => localeFromSegment(route.params.locale) ?? defaultLocale)

  const localizeAll = <T extends object>(sources: T[]) =>
    sources.map((source) => localize(source, locale.value))

  return {
    locale,
    t: computed(() => ui[locale.value]),
    meta: computed(() => siteMeta[locale.value]),
    homePath: computed(() => localePath(locale.value)),
    profile: computed(() => localize(profile, locale.value)),
    navigationItems: computed(() => localizeAll(navigationItems)),
    socialLinks: computed(() => localizeAll(socialLinks)),
    aboutParagraphs: computed(() => aboutParagraphs[locale.value]),
    experienceItems: computed(() => localizeAll(experienceItems)),
    projectItems: computed(() => localizeAll(projectItems)),
    writingItems: computed(() => localizeAll(writingItems)),
  }
}

/** Per-locale `lang`, title, description, and `hreflang` alternates. */
export function useLocalizedHead() {
  const { locale, meta } = useSiteContent()

  useHead(() => ({
    htmlAttrs: { lang: localeLanguage(locale.value) },
    title: meta.value.title,
    meta: [{ name: 'description', content: meta.value.description }],
    link: [
      ...Object.values(locales).map((item) => ({
        rel: 'alternate' as const,
        hreflang: item.language,
        href: siteUrl + item.path,
      })),
      {
        rel: 'alternate' as const,
        hreflang: 'x-default',
        href: siteUrl + localePath(defaultLocale),
      },
    ],
  }))
}
