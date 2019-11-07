<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/portfolio-site" aria-current="page">Portfolio Site</nuxt-link></li>
      </ul>
    </nav>

    <div class="content">
      <p>
        This is the site you're currently viewing!
        It's a static Single-Page Application (SPA) that uses the <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a> ecosystem.
        I'm using something Vue-based because I find it easier to write.
        For example, I don't have to worry about using <code>className</code> instead of <code>class</code> and <code>.vue</code> component/page files let you use a <code>&lt;template&gt;</code> tag to enclose your DOM elements.
      </p>

      <p>
        The back-end is a Node.js application using the <a href="https://nuxtjs.org/" target="_blank" rel="noopener">Nuxt.js</a> framework (similar to React's Next.js) that compiles pages and components to a bunch of JavaScript.
        The front-end is written using <a href="https://buefy.org/" target="_blank" rel="noopener">Buefy</a>, a Vue implementation of <a href="https://bulma.io/" target="_blank" rel="noopener">Bulma</a>.
        Carousel sliders are via <a href="https://surmon-china.github.io/vue-awesome-swiper/" target="_blank" rel="noopener">vue-awesome-swiper</a>, a Vue implementation of <a href="https://github.com/nolimits4web/swiper" target="_blank" rel="noopener">swiper</a>.
        Google's document viewer is used for PDF files.
        The compiled site is behind Cloudflare and pushed to GitHub Pages.
        This lets me use a custom domain while still being able to use that domain cleanly for other things, and still having some ability to track analytics.
        Additionally, it's static hosting and I don't need to worry about keeping Node applications running.
      </p>
    </div>

  </article>
</template>
