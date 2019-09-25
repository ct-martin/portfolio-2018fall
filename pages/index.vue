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
          Studying New Media Interactive Development &amp; Museum Studies at Rochester Institute of Technology
        </h2>
      </div>
    </div>
  </section>

  <br />
  <div class="container" id="heroCards">
    <div class="columns">
      <nuxt-link class="column" :to="project.url" v-for="project in this.$store.state['content'].list.filter(item => item.tags.includes('home-hero'))" :key="project.name">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"></span>{{project.name}}</h4>
            <p>{{project.description}}</p>
            <nuxt-link :to="project.url" class="btn btn-primary d-block" style="color:rgba(255,255,255,0.9)">More</nuxt-link>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
  <br />

  <div class="container" id="homeCards">
    <div class="columns is-multiline">
      <div class="column is-6-tablet">
        <div class="box has-background-primary">
          <h3 class="title has-text-white">Web</h3>
          <custom-list-group source="content" tag="home-web" />
        </div>
      </div>
      <div class="column is-6-tablet">
        <div class="box has-background-success">
          <h3 class="title has-text-white">Cloud</h3>
          <custom-list-group source="content" tag="home-cloud" />
        </div>
      </div>
      <div class="column is-6-tablet">
        <div class="box has-background-dark">
          <h3 class="title has-text-white">Design &amp; Interactivity</h3>
          <custom-list-group source="content" tag="home-design-ux" />
        </div>
      </div>
      <div class="column is-6-tablet">
        <div class="box has-background-danger">
          <h3 class="title has-text-white">More</h3>
          <custom-list-group source="content" tag="home-more" />
        </div>
      </div>
    </div>
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
