<script setup lang="ts">
import { aboutParagraphs, profile } from '~/data/site'
</script>

<template>
  <section id="about" class="section-anchor mt-20 lg:mt-0">
    <SectionHeading index="01" title="关于" />

    <div class="mt-7 space-y-5 leading-7 text-[#94a3b8]">
      <p v-for="(paragraph, index) in aboutParagraphs" :key="index" v-reveal="index * 70">
        {{ paragraph }}
      </p>
      <p v-reveal="240" class="font-mono text-sm text-[#64ffda]">
        {{ profile.location }} · {{ profile.availability }}
      </p>
    </div>
  </section>
</template>
