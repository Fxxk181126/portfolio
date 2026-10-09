<script setup lang="ts">
import { experienceItems } from '~/data/site'
</script>

<template>
  <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="工作经历">
    <SectionHeading title="Experience" />

    <ol class="group/list">
      <li
        v-for="experience in experienceItems"
        :key="experience.id"
        v-reveal="0"
        class="mb-12"
      >
        <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" aria-hidden="true" />
          <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            {{ experience.date }}
          </header>
          <div class="z-10 sm:col-span-6">
            <h3 class="font-medium leading-snug text-slate-200">
              <div v-if="experience.organizationHref">
                <a
                  class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200"
                  :href="experience.organizationHref"
                  target="_blank"
                  rel="noreferrer noopener"
                  :aria-label="`${experience.title} · ${experience.organization}（新窗口打开）`"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" aria-hidden="true" />
                  <span>
                    {{ experience.title }} ·
                    <span class="inline-block">{{ experience.organization }}<ArrowIcon class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" /></span>
                  </span>
                </a>
              </div>
              <div v-else>{{ experience.title }} · {{ experience.organization }}</div>
            </h3>
            <p class="mt-2 text-sm leading-normal">{{ experience.description }}</p>
            <ul class="mt-2 flex flex-wrap" aria-label="使用技术">
              <li v-for="technology in experience.technologies" :key="technology" class="mr-1.5 mt-2">
                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {{ technology }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
