<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/audio-viz" aria-current="page">Web Audio Visualizer</nuxt-link></li>
      </ul>
    </nav>

    <p>
      Waveform/frequency viewer with filters.
      Admittedly not the prettiest UI, but it's functional.
      The dots in the top right of the player indicate filter &amp; bypass status.
    </p>

    <br />
    <Carousel :banners="banners" style="background:black;"/>

    <br />
    <a class="button is-link is-fullwidth" href="https://people.rit.edu/ctm2142/igme330/web%20audio-1-proj/" target="_blank"><span class="fa fa-fw fa-link"></span> Try it!</a>
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
        '/img/projects/audio-viz-freq.png',
        '/img/projects/audio-viz-controls.png',
      ],
    }
  }
}
</script>
