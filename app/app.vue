<script setup lang="ts">
useLocalizedHead()

useHead({
  link: [
    {
      rel: 'preload',
      href: '/fonts/InterVariable.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
    },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
  ],
})
</script>

<template>
  <NuxtPage />
</template>
