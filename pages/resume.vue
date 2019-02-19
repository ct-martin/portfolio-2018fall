<template>
  <article class="container">
  <PDFViewer src="https://new.ctmartin.me/resume.pdf" />
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
