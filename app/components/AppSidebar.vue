<script setup lang="ts">
import { navigationItems, profile, socialLinks } from '~/data/site'

defineProps<{
  activeSection: string
}>()
</script>

<template>
  <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1
        v-reveal="0"
        class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
      >
        <a href="/">{{ profile.name }} {{ profile.englishName }}</a>
      </h1>
      <h2
        v-reveal="40"
        class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
      >
        {{ profile.title }}
      </h2>
      <p v-reveal="80" class="mt-4 max-w-xs leading-normal">
        {{ profile.focus }}
      </p>

      <nav class="hidden lg:block" aria-label="页面章节导航">
        <ul class="mt-16 w-max">
          <li v-for="item in navigationItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="group flex items-center py-3"
              :class="{ active: activeSection === item.id }"
              :aria-current="activeSection === item.id ? 'true' : undefined"
            >
              <span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
              />
              <span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
              >
                {{ item.label }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <ul class="ml-1 mt-8 flex items-center" aria-label="社交媒体">
      <li
        v-for="social in socialLinks"
        :key="social.href"
        v-reveal="0"
        class="mr-5 shrink-0 text-xs"
      >
        <a
          class="block text-slate-400 transition-colors hover:text-slate-200 focus-visible:text-slate-200"
          :href="social.href"
          target="_blank"
          rel="noreferrer noopener"
          :title="social.label"
          :aria-label="`${social.label}（新窗口打开）`"
        >
          <span class="sr-only">{{ social.label }}</span>
          <SocialIcon :name="social.icon" :size="24" />
        </a>
      </li>
    </ul>
  </header>
</template>
