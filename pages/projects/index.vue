<template>
  <article class="container">
    <h1 class="title">Projects</h1>
    <div class="columns is-multiline">
      <div v-for="project in this.$store.state.projects.list" :key="project.name" class="column is-4-tablet is-3-desktop">
        <nuxt-link :to="project.url" class="card is-block">
          <div class="card-content">
            <p class="title is-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</p>
            <p v-if="project.subtitle || project.badge" class="has-text-light">
              {{ project.subtitle }}
              <span v-if="project.badge" class="tag">{{ project.badge }}</span>
            </p>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </article>
</template>
