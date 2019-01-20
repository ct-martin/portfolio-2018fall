<template>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" :src="src"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['src']
}
</script>
