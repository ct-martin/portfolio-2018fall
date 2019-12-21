<template>
  <div>
    <section class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Christian Martin
          </h1>
          <h2 class="subtitle">
            Front-End Developer, Interactive Developer
            <br >
            Studying New Media Interactive Development &amp; Museum Studies<br >
            at Rochester Institute of Technology
          </h2>
        </div>
      </div>
    </section>

    <br >
    <div id="heroCards" class="container">
      <h3 class="title">Projects</h3>
      <div class="columns">
        <nuxt-link v-for="project in this.$store.state['content'].list.filter(item => item.tags.includes('home-hero'))" :to="project.url" :key="project.name" class="column">
          <div class="card">
            <div class="card-content">
              <h4 class="title is-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</h4>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <br >

    <div id="homeCards" class="container">
      <h3 class="title">Articles &amp; Talks</h3>
      <custom-list-group source="content" tag="home-more" />
    </div>
  </div>
</template>

<script>
import CustomListGroup from '~/components/CustomListGroup.vue'

export default {
  components: {
    CustomListGroup
  }
}
</script>
