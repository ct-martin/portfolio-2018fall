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
          <br />
          Studying New Media Interactive Development &amp; Museum Studies<br />
          at Rochester Institute of Technology
        </h2>
      </div>
    </div>
  </section>

  <br />
  <div class="container" id="heroCards">
    <h3 class="title">Projects</h3>
    <div class="columns">
      <nuxt-link class="column" :to="project.url" v-for="project in this.$store.state['content'].list.filter(item => item.tags.includes('home-hero'))" :key="project.name">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"></span> {{project.name}}</h4>
            <p>{{project.description}}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
  <br />

  <div class="container" id="homeCards">
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
  },
}
</script>
