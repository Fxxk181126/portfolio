<script setup lang="ts">
import { aboutParagraphs, profile } from '~/data/site'
</script>

<template>
  <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="关于我">
    <SectionHeading title="About" />

    <div>
      <p
        v-for="(paragraph, index) in aboutParagraphs"
        :key="index"
        v-reveal="index * 70"
        class="mb-4"
      >
        <template v-for="(segment, segIndex) in paragraph" :key="segIndex">
          <span v-if="segment.highlight" class="font-medium text-slate-200">{{ segment.text }}</span>
          <template v-else>{{ segment.text }}</template>
        </template>
      </p>
      <p v-reveal="240">
        {{ profile.location }} · {{ profile.availability }}
      </p>
    </div>
  </section>
</template>
