<script setup lang="ts">
import { Github } from 'lucide-vue-next'
import type { ProjectItem } from '~/data/site'

defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
      aria-hidden="true"
    />

    <div class="z-10 sm:order-2 sm:col-span-6">
      <h3>
        <a
          v-if="project.demoHref"
          :href="project.demoHref"
          class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" aria-hidden="true" />
          <span>
            {{ project.title }}
            <ArrowIcon class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
          </span>
          <span class="sr-only">（新窗口打开）</span>
        </a>
        <span v-else class="text-base font-medium leading-tight text-slate-200">{{ project.title }}</span>
      </h3>

      <p class="mt-2 text-sm leading-normal">{{ project.description }}</p>

      <a
        v-if="project.sourceHref"
        :href="project.sourceHref"
        class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github class="mr-1 h-3 w-3" aria-hidden="true" />
        <span>{{ project.sourceLabel ?? 'GitHub 仓库' }}</span>
        <span class="sr-only">（新窗口打开）</span>
      </a>

      <ul class="mt-2 flex flex-wrap" aria-label="项目技术栈">
        <li v-for="technology in project.technologies" :key="technology" class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {{ technology }}
          </div>
        </li>
      </ul>
    </div>

    <img
      :src="project.image"
      :alt="project.imageAlt"
      class="aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      width="200"
      height="48"
      loading="lazy"
    >
  </div>
</template>
