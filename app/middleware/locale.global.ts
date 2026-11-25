import { defaultLocale } from '~/data/site'
import { autoDetectLocale, localeFromSegment, localePath, negotiateLocale } from '~/utils/locale'

/** Reads the browser's language list from the request on the server and from the page on the client. */
const detectLocale = () =>
  negotiateLocale(
    import.meta.server
      ? useRequestHeaders(['accept-language'])['accept-language']
      : (navigator.languages ?? []).join(','),
  )

export default defineNuxtRouteMiddleware((to) => {
  if (!localeFromSegment(to.params.locale)) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }

  // Only the bare root follows the visitor's preference; an explicit locale path always wins.
  if (to.path !== '/') return

  // A locale picked by hand always wins; browser language detection is opt-in.
  const preferred = usePreferredLocale()
  const locale = isLocale(preferred.value)
    ? preferred.value
    : autoDetectLocale
      ? detectLocale()
      : defaultLocale

  if (locale !== defaultLocale) {
    return navigateTo(
      { path: localePath(locale), query: to.query, hash: to.hash },
      { redirectCode: 302 },
    )
  }
})
