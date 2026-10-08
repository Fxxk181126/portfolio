export default defineNuxtPlugin((nuxtApp) => {
  const observer = import.meta.client
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
      )
    : null

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')

      if (typeof binding.value === 'number') {
        el.style.transitionDelay = `${binding.value}ms`
      }

      observer?.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
    getSSRProps() {
      return {}
    },
  })
})
