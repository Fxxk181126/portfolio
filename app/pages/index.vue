<script setup lang="ts">
import { navigationItems, profile } from '~/data/site'

const activeSection = ref('about')
const spotlight = ref<HTMLElement | null>(null)
const pageLoaded = ref(false)
const spotlightBackground = ref(
  'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)',
)

let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0
let velocityX = 0
let velocityY = 0
let lastTime = 0
let animationFrame = 0

const updateSpotlight = (time: number) => {
  if (!lastTime) {
    lastTime = time
  }

  const elapsed = Math.min((time - lastTime) / 1000, 0.05)
  const stiffness = 100
  const damping = 10
  velocityX += (targetX - currentX) * stiffness * elapsed
  velocityY += (targetY - currentY) * stiffness * elapsed
  velocityX *= Math.exp(-damping * elapsed)
  velocityY *= Math.exp(-damping * elapsed)
  currentX += velocityX * elapsed
  currentY += velocityY * elapsed
  spotlightBackground.value = `radial-gradient(600px circle at ${currentX.toFixed(2)}px ${currentY.toFixed(2)}px, rgba(29, 78, 216, 0.15), transparent 80%)`

  if (
    Math.abs(targetX - currentX) > 0.01 ||
    Math.abs(targetY - currentY) > 0.01 ||
    Math.abs(velocityX) > 0.01 ||
    Math.abs(velocityY) > 0.01
  ) {
    animationFrame = requestAnimationFrame(updateSpotlight)
  } else {
    currentX = targetX
    currentY = targetY
    animationFrame = 0
  }
}

const onMouseMove = (event: MouseEvent) => {
  const element = spotlight.value

  if (!element || window.innerWidth < 1024) {
    return
  }

  const rect = element.getBoundingClientRect()
  targetX = event.clientX - rect.left
  targetY = event.clientY - rect.top

  if (!animationFrame) {
    lastTime = 0
    animationFrame = requestAnimationFrame(updateSpotlight)
  }
}

onBeforeUnmount(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})

onMounted(() => {
  requestAnimationFrame(() => {
    pageLoaded.value = true
  })

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
  <div id="top" class="group/spotlight relative" @mousemove="onMouseMove">
    <div
      ref="spotlight"
      class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      :style="{ background: spotlightBackground }"
      aria-hidden="true"
    />

    <a href="#content" class="skip-link">跳到主要内容</a>

    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div
        class="transition-opacity duration-700 ease-out lg:flex lg:justify-between lg:gap-4"
        :class="pageLoaded ? 'opacity-100' : 'opacity-0'"
      >
        <AppSidebar :active-section="activeSection" />

        <main id="content" class="pt-24 lg:w-[52%] lg:py-24">
          <div>
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <WritingSection />

            <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Designed &amp; built by {{ profile.name }}. Built with
                <a class="font-medium text-slate-400 transition-colors hover:text-teal-300 focus-visible:text-teal-300" href="https://nuxt.com" target="_blank" rel="noreferrer noopener">Nuxt</a>
                and
                <a class="font-medium text-slate-400 transition-colors hover:text-teal-300 focus-visible:text-teal-300" href="https://tailwindcss.com" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>,
                deployed with
                <a class="font-medium text-slate-400 transition-colors hover:text-teal-300 focus-visible:text-teal-300" href="https://vercel.com" target="_blank" rel="noreferrer noopener">Vercel</a>.
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
