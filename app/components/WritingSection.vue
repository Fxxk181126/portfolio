<script setup lang="ts">
import { writingItems } from '~/data/site'
</script>

<template>
  <section id="writing" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="博客文章">
    <SectionHeading title="Writing" />

    <ul class="group/list">
      <li v-for="article in writingItems" :key="article.href" v-reveal="0" class="mb-12">
        <div class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" aria-hidden="true" />
          <img
            v-if="article.image"
            :src="article.image"
            :alt="article.imageAlt"
            class="z-10 col-span-2 aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30"
            width="200"
            height="48"
            loading="lazy"
          >
          <div :class="article.image ? 'z-10 col-span-6' : 'z-10 col-span-8'">
            <p class="-mt-1 text-sm font-semibold leading-6">{{ article.year }}</p>
            <h3 class="-mt-1">
              <a
                :href="article.href"
                class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" aria-hidden="true" />
                <span>
                  {{ article.title }}
                  <ArrowIcon class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                </span>
                <span class="sr-only">（新窗口打开）</span>
              </a>
            </h3>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
