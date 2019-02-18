<template>
  <article class="container">
    <h1 class="title">Projects</h1>
    <div class="columns is-multiline">
      <div class="column is-4-tablet is-3-desktop" v-for="project in this.$store.state.projects.list" :key="project.name">
        <nuxt-link :to="project.url" class="card is-block">
          <div class="card-content">
            <p class="title is-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"></span> {{ project.name }}</p>
            <p class="has-text-light" v-if="project.subtitle || project.badge">
              {{ project.subtitle }}
              <span class="tag" v-if="project.badge">{{ project.badge }}</span>
            </p>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </article>
</template>
