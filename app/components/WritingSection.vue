<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { writingItems } from '~/data/site'
</script>

<template>
  <section id="writing" class="section-anchor mt-24 md:mt-32">
    <SectionHeading index="04" title="文章" />

    <ol class="mt-9 space-y-8">
      <li v-for="article in writingItems" :key="article.href" v-reveal="0">
        <a
          :href="article.href"
          class="group block rounded-lg border border-transparent px-4 py-4 transition-colors duration-200 hover:border-[#64ffda]/20 hover:bg-[#112036]/45"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div class="flex items-center justify-between gap-6">
            <p class="font-mono text-xs text-[#94a3b8]">
              {{ article.date }} · {{ article.publication }}
            </p>
            <ArrowUpRight
              class="shrink-0 text-[#64ffda] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              :size="18"
              aria-hidden="true"
            />
          </div>
          <h3 class="mt-3 text-lg font-semibold text-[#e2e8f0] transition-colors group-hover:text-[#64ffda] sm:text-xl">
            {{ article.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-[#94a3b8]">{{ article.excerpt }}</p>
        </a>
      </li>
    </ol>
  </section>
</template>
