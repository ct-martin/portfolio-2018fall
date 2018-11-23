<template>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" :src="srcFull"></iframe>
  </div>
</template>

<script>
export default {
  props: ['src'],
  computed: {
    srcFull() {
      // Google Drive Viewer: `http://docs.google.com/gview?url=${this.src}&embedded=true`
      // PDF.js: `https://mozilla.github.io/pdf.js/web/viewer.html?file=${this.src}`
      return `http://docs.google.com/gview?url=${this.src}&embedded=true`;
    }
  }
}
</script>
