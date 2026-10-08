<script setup lang="ts">
import { experienceItems } from '~/data/site'
</script>

<template>
  <section id="experience" class="section-anchor mt-24 md:mt-32">
    <SectionHeading index="02" title="经历" />

    <ol class="mt-10 space-y-12 border-l border-slate-400/16 pl-6 sm:pl-8">
      <li
        v-for="experience in experienceItems"
        :key="experience.id"
        v-reveal="0"
        class="timeline-item"
      >
        <p class="font-mono text-xs text-[#94a3b8] sm:text-sm">{{ experience.date }}</p>
        <h3 class="mt-2 text-xl font-semibold tracking-tight text-[#e2e8f0]">
          {{ experience.title }}
          <span class="text-[#94a3b8]">· {{ experience.organization }}</span>
        </h3>
        <p class="mt-3 leading-7 text-[#94a3b8]">{{ experience.description }}</p>

        <ul class="mt-4 space-y-2 text-sm leading-6 text-[#94a3b8]">
          <li v-for="highlight in experience.highlights" :key="highlight" class="flex gap-3">
            <span class="mt-2 text-[#64ffda]" aria-hidden="true">▹</span>
            <span>{{ highlight }}</span>
          </li>
        </ul>

        <ul class="mt-5 flex flex-wrap gap-2" aria-label="使用技术">
          <li v-for="technology in experience.technologies" :key="technology" class="tag">
            {{ technology }}
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>
