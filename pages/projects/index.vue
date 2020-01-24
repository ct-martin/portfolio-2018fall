<template>
  <article class="container">
    <h1 class="title">Projects</h1>
    <div class="columns is-multiline">
      <div v-for="project in this.$store.state.projects.list" :key="project.name" class="column is-4-tablet is-3-desktop">
        <project-card :project="project" nocategory />
      </div>
    </div>
  </article>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  }
}
</script>