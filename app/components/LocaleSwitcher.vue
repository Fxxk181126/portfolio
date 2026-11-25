<script setup lang="ts">
import { locales } from '~/data/site'
import type { Locale } from '~/data/site'
import { localePath } from '~/utils/locale'

const { locale, t } = useSiteContent()
const route = useRoute()
const preferred = usePreferredLocale()
const localeList = Object.values(locales)

// The hash only exists on the client, so keep it out of the first render to match the server markup.
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

const targetFor = (code: Locale) => ({
  path: localePath(code),
  hash: mounted.value ? route.hash : '',
})

const prefer = (code: Locale) => {
  preferred.value = code
}
</script>

<template>
  <nav :aria-label="t.localeSwitcher">
    <ul class="flex items-center text-xs font-bold uppercase tracking-widest">
      <li v-for="(item, index) in localeList" :key="item.code" class="flex items-center">
        <span v-if="index" class="px-2 text-slate-600" aria-hidden="true">/</span>
        <NuxtLink
          :to="targetFor(item.code)"
          :lang="item.language"
          :hreflang="item.language"
          :aria-current="locale === item.code ? 'true' : undefined"
          class="transition-colors"
          :class="locale === item.code ? 'text-slate-200' : 'text-slate-500 hover:text-teal-300'"
          @click="prefer(item.code)"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
