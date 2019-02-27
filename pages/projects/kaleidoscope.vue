<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/kaleidoscope" aria-current="page">Kaleidoscope</nuxt-link></li>
      </ul>
    </nav>

    <p>An interactive kaleidoscope you can draw on, with particles.</p>

    <br />
    <Carousel :banners="banners" style="background:black;"/>

    <br />
    <a class="button is-link is-fullwidth" href="https://people.rit.edu/ctm2142/igme330/project2/" target="_blank"><span class="fa fa-fw fa-link"></span> Try it!</a>
    <!--<a class="button is-link is-fullwidth" href="https://github.com/ct-martin/StartPage" target="_blank"><span class="fa fa-fw fa-github"></span> View on GitHub</a>-->
  </article>
</template>

<script>
import Carousel from '~/components/Carousel.vue'

export default {
  components: {
    Carousel
  },
  data() {
    return {
      banners: [
        '/img/projects/kaleidoscope-0.png',
        '/img/projects/kaleidoscope-1.png',
        '/img/projects/kaleidoscope-2.png',
        '/img/projects/kaleidoscope-3.png',
      ],
    }
  }
}
</script>
