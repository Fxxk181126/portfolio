<script setup lang="ts">
import { projectItems } from '~/data/site'
</script>

<template>
  <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="精选作品">
    <SectionHeading title="Projects" />

    <ul class="group/list">
      <li v-for="project in projectItems" :key="project.id" v-reveal="0" class="mb-12">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </section>
</template>
