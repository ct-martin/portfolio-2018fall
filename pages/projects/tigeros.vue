<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/tigeros" aria-current="page">TigerOS</nuxt-link> <p class="subtitle">Project Lead</p></li>
      </ul>
    </nav>

    <blockquote class="blockquote blockquote-fix">
      Fedora Remix maintained by the Rochester Institute of Technology (RIT) Linux Users Group, targeted at users new to Linux and RIT students, faculty, and staff
    </blockquote>

    <p>TigerOS is designed to be familiar to users coming from Mac or Windows.</p>

    <p>
      Since joining the project, TigerOS has re-written almost all of its codebase.
      We've changed a lot of things to ensure compatibility with upstream Fedora, RIT's networking &amp; labs, and software users might be coming from.
      We've also refactored the packages to ensure better updating and forward compatibility.
    </p>

    <br />
    <Carousel :banners="banners" />

    <br />
    <a class="button is-link is-fullwidth" href="https://github.com/RITlug/TigerOS" target="_blank" rel="noopener"><span class="fa fa-fw fa-github"></span> View on GitHub</a>
    <a class="button is-link is-fullwidth" href="https://ritlug.com/tigeros" target="_blank" rel="noopener" style="margin-top:.25rem;"><span class="fa fa-fw fa-link"></span> View Project Homepage</a>

    <br />
    <div class="card">
      <div class="card-content">
        <p>TigerOS is a RITlug project. Code is available under GPLv3</p>
      </div>
    </div>
  </article>
</template>

<script>
import Carousel from '~/components/Carousel.vue'

export default {
  components: {
    Carousel
  },
  data() {
    return {
      banners: [
        '/img/projects/tigeros-whitebg.jpg',
        '/img/projects/tigeros-desktop.jpg',
        '/img/projects/tigeros-ux-brainstorm.jpg',
      ],
    }
  }
}
</script>
