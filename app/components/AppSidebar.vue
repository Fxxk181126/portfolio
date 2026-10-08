<script setup lang="ts">
import { navigationItems, profile, socialLinks } from '~/data/site'

defineProps<{
  activeSection: string
}>()
</script>

<template>
  <aside class="hidden lg:block">
    <div class="sticky top-0 grid h-screen grid-cols-[2.5rem_1fr] gap-10 py-10">
      <ul class="flex flex-col items-center justify-end gap-2">
        <li v-for="social in socialLinks" :key="social.href">
          <a
            :href="social.href"
            class="social-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SocialIcon :name="social.icon" />
            <span class="sr-only">{{ social.label }}（新窗口打开）</span>
          </a>
        </li>
        <li class="mt-4 h-24 w-px bg-slate-400/25" aria-hidden="true" />
      </ul>

      <div class="flex flex-col justify-center">
        <p class="font-mono text-sm text-[#64ffda]">{{ profile.greeting }}</p>
        <h1 class="mt-3 text-5xl font-bold tracking-tight text-[#e2e8f0] xl:text-6xl">
          {{ profile.name }} <span class="text-[#94a3b8]">{{ profile.englishName }}</span>
        </h1>
        <h2 class="mt-4 text-xl font-medium tracking-tight text-[#e2e8f0]">
          {{ profile.title }}
        </h2>
        <p class="mt-2 font-mono text-sm text-[#64ffda]">{{ profile.focus }}</p>
        <p class="mt-6 max-w-md text-[0.95rem] leading-7 text-[#94a3b8]">
          {{ profile.summary }}
        </p>

        <nav class="mt-12" aria-label="页面章节导航">
          <ul class="space-y-3">
            <li v-for="item in navigationItems" :key="item.id">
              <a
                :href="`#${item.id}`"
                class="nav-link"
                :class="{ 'is-active': activeSection === item.id }"
                :aria-current="activeSection === item.id ? 'true' : undefined"
              >
                <span class="nav-number">{{ item.number }}.</span>
                <span>{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>
