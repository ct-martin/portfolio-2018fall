<template>
  <article class="container">
    <h1 class="title"><span class="fa fa-desktop fa-fw"></span> Talks</h1>
    <nuxt-link :to="project.url" class="card is-block" v-for="project in this.$store.state.talks.list" :key="project.name">
      <div class="card-content">
        <h4 class="title is-4">{{ project.name }}</h4>
        <p class="subtitle" v-if="project.subtitle || project.badge">
          {{ project.subtitle }}
          <span class="tag" v-if="project.badge">{{ project.badge }}</span>
        </p>
        <p>{{ project.description }}</p>
      </div>
    </nuxt-link>
  </article>
</template>
