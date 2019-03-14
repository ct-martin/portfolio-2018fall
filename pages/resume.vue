<template>
  <article class="container">
    <p class="content">For print options click the arrow icon on the top-right of the viewer</p>
    <PDFViewer src="https://ctmartin.me/resume.pdf" />

    <br />
    <a class="button is-link is-fullwidth" href="/resume.pdf" target="_blank"><span class="fa fa-fw fa-file-pdf-o"></span> Download</a>
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
