<template>
  <article class="container">
    <h1 style="margin-bottom:0.25em;"><span class="fa fa-desktop fa-fw"></span> Talks &amp; Workshops</h1>
    <b-list-group>
      <b-list-group-item :to="talk.url" class="d-flex justify-content-between align-items-center" v-for="talk in this.$store.state.talks.list" :key="talk.name">
        <div>
          <h3 class="mb-1">{{ talk.name }}</h3>
          <p class="text-muted mb-1">{{ talk.subtitle }}</p>
          <p class="mb-1">{{ talk.description }}</p>
        </div>
        <span class="fa fa-chevron-right"></span>
      </b-list-group-item>
    </b-list-group>
  </article>
</template>
