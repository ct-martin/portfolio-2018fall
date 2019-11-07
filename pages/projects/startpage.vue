<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/startpage" aria-current="page">StartPage</nuxt-link></li>
      </ul>
    </nav>

    <p>A simple page to read the news and weather, using the geolocation API &amp; local storage caching.</p>

    <br />
    <Carousel :banners="banners" />

    <br />
    <a class="button is-link is-fullwidth" href="https://github.com/ct-martin/StartPage" target="_blank" rel="noopener"><span class="fa fa-fw fa-github"></span> View on GitHub</a>
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
        '/img/projects/startpage.png',
      ],
    }
  }
}
</script>
