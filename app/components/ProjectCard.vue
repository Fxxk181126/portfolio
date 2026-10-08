<script setup lang="ts">
import { ArrowUpRight, Github } from 'lucide-vue-next'
import type { ProjectItem } from '~/data/site'

defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-lg border border-slate-400/14 bg-[#112036]/72 transition-all duration-300 hover:-translate-y-1 hover:border-[#64ffda]/38 hover:shadow-2xl hover:shadow-[#64ffda]/8"
  >
    <div class="overflow-hidden">
      <a
        v-if="project.demoHref"
        :href="project.demoHref"
        target="_blank"
        rel="noreferrer noopener"
        class="block"
      >
        <img
          :src="project.image"
          :alt="project.imageAlt"
          class="aspect-16/9 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        >
      </a>
      <img
        v-else
        :src="project.image"
        :alt="project.imageAlt"
        class="aspect-16/9 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      >
    </div>

    <div class="p-5 sm:p-7">
      <div class="flex items-start justify-between gap-5">
        <h3 class="text-xl font-semibold tracking-tight text-[#e2e8f0]">
          <a
            v-if="project.demoHref"
            :href="project.demoHref"
            class="link-underline transition-colors hover:text-[#64ffda]"
            target="_blank"
            rel="noreferrer noopener"
          >
            {{ project.title }}
          </a>
          <span v-else>{{ project.title }}</span>
        </h3>
        <ArrowUpRight
          v-if="project.demoHref"
          class="mt-1 shrink-0 text-[#64ffda] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          :size="20"
          aria-hidden="true"
        />
      </div>

      <p class="mt-4 leading-7 text-[#94a3b8]">{{ project.description }}</p>

      <ul class="mt-5 space-y-2 text-sm leading-6 text-[#94a3b8]">
        <li v-for="highlight in project.highlights" :key="highlight" class="flex gap-3">
          <span class="mt-2 text-[#64ffda]" aria-hidden="true">▹</span>
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <ul class="mt-6 flex flex-wrap gap-2" aria-label="项目技术栈">
        <li v-for="technology in project.technologies" :key="technology" class="tag">
          {{ technology }}
        </li>
      </ul>

      <a
        v-if="project.sourceHref"
        :href="project.sourceHref"
        class="link-underline mt-6 inline-flex items-center gap-2 text-sm text-[#94a3b8] transition-colors hover:text-[#64ffda]"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github :size="16" aria-hidden="true" />
        {{ project.sourceLabel ?? '查看源码' }}
        <span class="sr-only">（新窗口打开）</span>
      </a>
    </div>
  </article>
</template>
