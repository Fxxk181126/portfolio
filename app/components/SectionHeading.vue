<script setup lang="ts">
defineProps<{
  index: string
  title: string
  href?: string
  hrefLabel?: string
}>()
</script>

<template>
  <div class="flex items-center gap-4">
    <h2 class="flex items-baseline gap-3 text-2xl font-bold tracking-tight text-[#e2e8f0] sm:text-3xl">
      <span class="font-mono text-lg text-[#64ffda] sm:text-xl">{{ index }}.</span>
      {{ title }}
    </h2>
    <span class="h-px max-w-24 flex-1 bg-slate-400/20 sm:max-w-40" aria-hidden="true" />
    <a
      v-if="href"
      :href="href"
      class="link-underline shrink-0 font-mono text-xs text-[#94a3b8] transition-colors hover:text-[#64ffda] sm:text-sm"
    >
      {{ hrefLabel ?? '查看全部' }}
    </a>
  </div>
</template>
