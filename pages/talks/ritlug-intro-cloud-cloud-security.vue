<template>
  <article class="container">
    <h1 class="title">Intro to The Cloud & Cloud Security <small>(Talk, RITlug)</small></h1>

    <p>Learn about the layers that make up "The Cloud" & the security concerns at each of those layers.</p>
    <PDFViewer src="" />
    <br />
    <a href="https://ritlug.com/talks/" target="_blank" class="button is-link is-fullwidth">RITlug's Talk Page</a>
    <a href="https://ritlug.com/talks/slides/" target="_blank" class="button is-link is-fullwidth" style="margin-top:.25rem;">Direct link to slides</a>

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
