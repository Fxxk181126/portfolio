<script setup lang="ts">
import {
  aboutParagraphs,
  navigationItems,
  profile,
  socialLinks,
} from '~/data/site'

const activeSection = ref('about')
const menuOpen = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-38% 0px -54% 0px', threshold: 0 },
  )

  navigationItems.forEach(({ id }) => {
    const section = document.getElementById(id)
    if (section) {
      observer.observe(section)
    }
  })

  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <div id="top" class="relative min-h-screen overflow-x-hidden bg-[#0f172a]">
    <a href="#content" class="skip-link">跳到主要内容</a>

    <AppHeader
      v-model:menu-open="menuOpen"
      :navigation-items="navigationItems"
      :social-links="socialLinks"
    />

    <div class="mx-auto w-full max-w-[1540px] px-5 sm:px-8 lg:grid lg:grid-cols-[minmax(320px,1fr)_minmax(0,640px)] lg:items-start lg:gap-20 lg:px-12 xl:px-16">
      <AppSidebar :active-section="activeSection" />

      <main
        id="content"
        class="w-full min-w-0 pt-16 pb-20 sm:pt-20 lg:pt-24 lg:pb-28"
      >
        <div class="lg:hidden" v-reveal="0">
          <p class="font-mono text-sm text-[#64ffda]">{{ profile.greeting }}</p>
          <h1 class="mt-3 text-4xl font-bold tracking-tight text-[#e2e8f0] sm:text-5xl">
            {{ profile.name }} <span class="text-[#94a3b8]">{{ profile.englishName }}</span>
          </h1>
          <h2 class="mt-4 text-lg font-medium tracking-tight text-[#e2e8f0] sm:text-xl">
            {{ profile.title }}
          </h2>
          <p class="mt-3 font-mono text-sm text-[#64ffda]">{{ profile.focus }}</p>
          <p class="mt-5 max-w-2xl leading-7 text-[#94a3b8]">
            {{ profile.summary }}
          </p>
          <ul class="mt-8 flex items-center gap-2">
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
          </ul>
        </div>

        <AboutSection v-reveal="60" />
        <ExperienceSection v-reveal="0" />
        <ProjectsSection v-reveal="0" />
        <WritingSection v-reveal="0" />
        <ContactSection v-reveal="0" />
      </main>
    </div>
  </div>
</template>
