<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item has-text-weight-bold" to="/">Christian Martin</nuxt-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMain" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
          <nuxt-link class="navbar-item" to="/talks">Talks</nuxt-link>
          <nuxt-link class="navbar-item" to="/articles">Articles</nuxt-link>
        </div>
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// export b/c component
export default {
  mounted: function() {
    // https://bulma.io/documentation/components/navbar/#navbar-menu
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

    // added bit to close navbar upon item click
    document.querySelectorAll('.navbar').forEach(nav => {
      nav.querySelectorAll('a:not(.navbar-burger)').forEach(el => {
        el.addEventListener('click', () => {
          // This bit is copied from the Bulma code above
          // Remove the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          nav.querySelector('.navbar-burger').classList.remove('is-active');
          nav.querySelector('.navbar-menu').classList.remove('is-active');
        });
      });
    });
  }
}
</script>
