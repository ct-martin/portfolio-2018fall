<template>
  <article class="container">
    <h1 class="title"><span class="fa fa-desktop fa-fw"/> Talks</h1>
    <nuxt-link v-for="project in this.$store.state.talks.list" :to="project.url" :key="project.name" class="card is-block">
      <div class="card-content">
        <h4 class="title is-4">{{ project.name }}</h4>
        <p v-if="project.subtitle || project.badge" class="subtitle">
          {{ project.subtitle }}
          <span v-if="project.badge" class="tag">{{ project.badge }}</span>
        </p>
        <p>{{ project.description }}</p>
      </div>
    </nuxt-link>
  </article>
</template>
