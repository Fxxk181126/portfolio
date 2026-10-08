<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import type { NavigationItem, SocialLink } from '~/data/site'

const props = defineProps<{
  menuOpen: boolean
  navigationItems: NavigationItem[]
  socialLinks: SocialLink[]
}>()

const emit = defineEmits<{
  'update:menuOpen': [value: boolean]
}>()

const close = () => emit('update:menuOpen', false)

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close()
  }
}

watch(
  () => props.menuOpen,
  (open) => {
    if (import.meta.client) {
      document.body.style.overflow = open ? 'hidden' : ''
    }
  },
)

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header class="fixed top-0 right-0 left-0 z-40 border-b border-slate-400/10 bg-[#0f172a] lg:hidden">
    <div class="flex h-16 items-center justify-between px-5">
      <a href="#top" class="flex items-center gap-2 font-mono text-sm text-[#e2e8f0]" @click="close">
        <span class="text-[#64ffda]">Z.</span>
        <span>Zhao Jiong</span>
      </a>
      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center text-[#e2e8f0] transition-colors hover:text-[#64ffda]"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="emit('update:menuOpen', !menuOpen)"
      >
        <component :is="menuOpen ? X : Menu" :size="22" aria-hidden="true" />
        <span class="sr-only">{{ menuOpen ? '关闭菜单' : '打开菜单' }}</span>
      </button>
    </div>

    <Transition name="drawer">
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="fixed inset-0 top-16 z-30 bg-[#0b1120]"
        @keydown="onKeydown"
      >
        <button
          type="button"
          class="absolute inset-0 cursor-default"
          aria-label="关闭菜单"
          @click="close"
        />
        <nav class="relative flex h-full flex-col px-7 pt-10" aria-label="移动端页面导航">
          <ul class="space-y-6">
            <li v-for="(item, index) in navigationItems" :key="item.id">
              <a
                :href="`#${item.id}`"
                class="flex items-baseline gap-4 text-2xl font-medium text-[#e2e8f0] transition-colors hover:text-[#64ffda]"
                :style="{ transitionDelay: `${index * 25}ms` }"
                @click="close"
              >
                <span class="font-mono text-sm text-[#64ffda]">{{ item.number }}.</span>
                {{ item.label }}
              </a>
            </li>
          </ul>

          <ul class="mt-auto flex items-center gap-3 pb-10">
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
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
