<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/talks">Talks</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/talks/ritlug-intro-cloud-cloud-security" aria-current="page">Intro to The Cloud & Cloud Security</nuxt-link> <p class="subtitle">(Talk, RITlug)</p></li>
      </ul>
    </nav>

    <p class="content">Learn about the layers that make up "The Cloud" & the security concerns at each of those layers.</p>
    <PDFViewer src="https://github.com/RITlug/ritlug.github.io/raw/5c50fc35138a17d5397b7e6e9e2bdbdd989617f0/talks/slides/2019-spring-w03-intro-to-cloud-cloud-security.pdf" />
    <br />
    <!--<a href="https://ritlug.com/talks/" target="_blank" rel="noopener" class="button is-link is-fullwidth">RITlug's Talk Page</a>-->
    <!--<a href="https://ritlug.com/talks/slides/2019-w03-intro-to-cloud-cloud-security.pdf" target="_blank" rel="noopener" class="button is-link is-fullwidth" style="margin-top:.25rem;">Direct link to slides</a>-->
    <a href="https://github.com/RITlug/ritlug.github.io/raw/5c50fc35138a17d5397b7e6e9e2bdbdd989617f0/talks/slides/2019-spring-w03-intro-to-cloud-cloud-security.pdf" target="_blank" rel="noopener" class="button is-link is-fullwidth" style="margin-top:.25rem;">Direct link to slides</a>

    <div class="card" style="margin-top:1rem;">
      <div class="card-content">
        <h4 class="card-title">License</h4>
        <p>This talk is available under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a></p>
      </div>
    </div>
  </article>
</template>

<script>
import PDFViewer from '~/components/PDFViewer.vue'

export default {
  components: {
    PDFViewer
  }
}
</script>
