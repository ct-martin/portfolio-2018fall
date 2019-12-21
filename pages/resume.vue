<template>
  <article class="container">
    <PDFViewer src="https://ctmartin.dev/resume.pdf" />

    <br >
    <a class="button is-info is-fullwidth" href="/resume.pdf" target="_blank" rel="noopener"><span class="fa fa-fw fa-file-pdf-o"/> Download</a>
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
