<template>
  <nuxt-link v-if="project.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) !== 0" :to="project.url" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    <div>
      <h5 class="mb-1"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"></span>{{ project.name }}</h5>
      <p class="mb-1">{{ project.description }}</p>
    </div>
    <span class="fa fa-chevron-right"></span>
  </nuxt-link>
  <a v-else :href="project.url" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    <div>
      <h5 class="mb-1"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"></span>{{ project.name }}</h5>
      <p class="mb-1">{{ project.description }}</p>
    </div>
    <span class="fa fa-chevron-right"></span>
  </a>
</template>

<script>
export default {
  props: ['project'],
}
</script>
