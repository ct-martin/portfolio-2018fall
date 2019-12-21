<template>
  <article class="container">
    <h1 v-if="!!error && error.statusCode === 404" class="title">404 - Page Not Found</h1>
    <h1 v-else class="title">An error occurred</h1>

    <p>When you look into the <code>void</code>, the <code>void</code> also looks into you.</p>
    <nuxt-link to="/">Back to home</nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
