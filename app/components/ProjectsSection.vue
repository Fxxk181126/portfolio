<script setup lang="ts">
import { projectItems } from '~/data/site'
</script>

<template>
  <section id="projects" class="section-anchor mt-24 md:mt-32">
    <SectionHeading index="03" title="作品" />

    <div class="mt-10 space-y-8">
      <div v-for="project in projectItems" :key="project.id" v-reveal="0">
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>
