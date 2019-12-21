<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/short-link" aria-current="page">Short-Link</nuxt-link></li>
      </ul>
    </nav>

    <p>URL link shortener, similar to bit.ly, written by me. Supports tracking of clicks, including geolocation (if behind Cloudflare), referrer, & user agent.</p>
    <p>Frontend built using <strong>React</strong> &amp; Semantic UI. Backend is mostly <strong>Node.js</strong> &amp; MongoDB. Heroku &amp; Dokku are supported for deployment.</p>

    <br >
    <Carousel :banners="banners" />

    <br >
    <a class="button is-link is-fullwidth" href="https://github.com/ct-martin/Short-Link" target="_blank" rel="noopener"><span class="fa fa-fw fa-github"/> View on GitHub</a>
  </article>
</template>

<script>
import Carousel from '~/components/Carousel.vue'

export default {
  components: {
    Carousel
  },
  data () {
    return {
      banners: [
        '/img/projects/slink-link-summary.jpg',
        '/img/projects/slink-list.jpg',
        '/img/projects/slink-shorten.jpg'
      ]
    }
  }
}
</script>
