<script setup lang="ts">
import { profile, socialLinks } from '~/data/site'
</script>

<template>
  <section id="contact" class="section-anchor mt-24 md:mt-32">
    <SectionHeading index="05" title="联系" />

    <div v-reveal="0" class="mt-8">
      <h3 class="max-w-xl text-3xl font-bold tracking-tight text-[#e2e8f0] sm:text-4xl">
        我们可以聊聊系统、可视化或 AI 落地。
      </h3>
      <p class="mt-5 max-w-xl leading-7 text-[#94a3b8]">
        无论是一个需要重新理清边界的 B 端系统，还是一条从数据可视化走向智能工作流的产品路径，
        我都愿意从真实问题和约束开始讨论。
      </p>

      <ul class="mt-8 flex flex-wrap gap-3">
        <li v-for="social in socialLinks" :key="social.href">
          <a
            :href="social.href"
            class="inline-flex items-center gap-2 rounded-full border border-[#64ffda]/35 px-5 py-2.5 text-sm font-medium text-[#64ffda] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#64ffda] hover:bg-[#64ffda]/8"
            target="_blank"
            rel="noreferrer noopener"
          >
            {{ social.label }}
            <span class="sr-only">（新窗口打开）</span>
          </a>
        </li>
      </ul>
    </div>

    <footer class="mt-24 border-t border-slate-400/12 pt-8 text-center font-mono text-xs leading-6 text-[#94a3b8]">
      <p>Designed &amp; built by {{ profile.name }} / {{ profile.englishName }}</p>
      <p class="mt-2">
        Built with Nuxt, Vue 3 and Tailwind CSS · {{ profile.location }}
      </p>
    </footer>
  </section>
</template>
