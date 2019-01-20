<template>
  <article class="container">
    <h1>Talks &amp; Workshops</h1>
    <b-list-group>
      <b-list-group-item :to="talk.url" class="flex-column align-items-start" v-for="talk in this.$store.state.talks.list" :key="talk.name">
        <h3 class="mb-1">{{ talk.name }}</h3>
        <p class="text-muted mb-1">{{ talk.subtitle }}</p>
        <p class="mb-1">{{ talk.description }}</p>
      </b-list-group-item>
    </b-list-group>
  </article>
</template>
