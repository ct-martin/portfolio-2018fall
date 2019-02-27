<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/arduino-macros" aria-current="page">Arduino Macro Buttons</nuxt-link></li>
      </ul>
    </nav>

    <div class="content">
      <p>
        Taking complex keyboard shortcuts to just a button press.
      </p>

      <p>
        While relatively utilitarian, this project allows one to do simple macro-like keys for Photoshop, or really anything of your choosing.
        Right now the code only handles keyboard shortcuts, but could be expanded to include direct API calls.
        All buttons can be easily configured in the Arduino code and are passed to a simple server that replays the given commands.
        There are three “zones” in my setup, a center button connected to the switch at the top, and then two zones of two buttons each with a switch on the right.
        The switch allows you to change the function of the buttons in the zones, allowing for easier configuration.
      </p>

      <p>
        The project isn’t perfect; the biggest issue I was encountering was that despite having the same serial timings,
        the receiving program would sometimes break the send string in the wrong place, causing it to try to parse something like CTR+L+Z instead of CTRL+Z.
        However, it’s a good platform to work off of, and given the flexibility of the code it would be easy to expand upon this for more controls.
        One thing I want to look at, for example, is getting a dial for volume control.
      </p>
    </div>

    <br />
    <Carousel :banners="banners" style="background:black;max-height:500px;"/>

    <br />
    <a class="button is-link is-fullwidth" href="https://people.rit.edu/ctm2142/igme330/web%20audio-1-proj/" target="_blank"><span class="fa fa-fw fa-video"></span> See the video</a>
    <!--<a class="button is-link is-fullwidth" href="https://github.com/ct-martin/StartPage" target="_blank"><span class="fa fa-fw fa-github"></span> View on GitHub</a>-->
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
        '/img/projects/arduino-macros.jpg',
      ],
    }
  }
}
</script>
