<template>
  <div>
    <navbar />
    <main>
      <nuxt />
    </main>
    <footer class="footer has-background-dark">
      <div class="container">
        <p>&copy; 2020 Christian Martin</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
