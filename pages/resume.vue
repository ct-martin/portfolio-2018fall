<template>
  <article class="container">
    <PDFViewer src="https://ctmartin.dev/resume.pdf" />

    <br />
    <a class="button is-info is-fullwidth" href="/resume.pdf" target="_blank"><span class="fa fa-fw fa-file-pdf-o"></span> Download</a>
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
