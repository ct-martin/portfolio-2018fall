<template>
  <div>
    <navbar />
    <main>
      <nuxt />
    </main>
    <footer class="container-fluid bg-dark">
      <div class="container">
        <p>&copy; 2019 Christian Martin</p>
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
