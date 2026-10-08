<script setup lang="ts">
import { Github, Globe, PenTool, MessageCircle } from 'lucide-vue-next'
import type { SocialIconName } from '~/data/site'

const props = defineProps<{
  name: SocialIconName
  size?: number
}>()

const icons = {
  github: Github,
  blog: Globe,
  juejin: PenTool,
  zhihu: MessageCircle,
}

const icon = computed(() => icons[props.name])
</script>

<template>
  <component :is="icon" :size="size ?? 18" aria-hidden="true" />
</template>
