<template>
  <article class="container">
    <h1>Short-Link</h1>
    <p>URL link shortener, similar to bit.ly, etc. Supports tracking of clicks, including geolocation (if behind Cloudflare), referrer, & user agent.</p>
    <p>Frontend built using <strong>React</strong> &amp; Semantic UI. Backend is mostly <strong>Node.js</strong> &amp; MongoDB. Heroku &amp; Dokku are supported for deployment.</p>

    <Carousel :banners="banners" />

    <br />
    <a class="button is-link is-fullwidth" href="https://github.com/ct-martin/Short-Link" target="_blank"><span class="fa fa-fw fa-github"></span> View on GitHub</a>
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
        '/img/projects/slink-link-summary.jpg',
        '/img/projects/slink-list.jpg',
        '/img/projects/slink-shorten.jpg',
      ],
    }
  }
}
</script>
