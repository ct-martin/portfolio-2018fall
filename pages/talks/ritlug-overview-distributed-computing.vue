<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/talks">Talks</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/talks/ritlug-overview-distributed-computing" aria-current="page">Overview of Distributed Computing</nuxt-link> <p class="subtitle">(Talk, RITlug)</p></li>
      </ul>
    </nav>

    <p class="content">An overview of distributed computing, such as virtualization and containers, how we use them, and why.</p>
    <PDFViewer src="https://ritlug.com/talks/slides/2017-w10-fall-overview-of-distributed-computing.pdf" />
    <br />
    <a href="https://ritlug.com/talks/2017/11/03/overview-distributed-computing.html" target="_blank" class="button is-link is-fullwidth">RITlug's Talk Page</a>
    <a href="https://ritlug.com/talks/slides/2017-w10-fall-overview-of-distributed-computing.pdf" target="_blank" class="button is-link is-fullwidth" style="margin-top:.25rem;">Direct link to slides</a>

    <div class="card" style="margin-top:1rem;">
      <div class="card-content">
        <h4 class="card-title">License</h4>
        <p>This talk is available under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a></p>
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
