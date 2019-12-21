<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/talks">Talks</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/talks/stv-internet-trust" aria-current="page">Trust in the Internet Age</nuxt-link> <p class="subtitle">(Talk, STV)</p></li>
      </ul>
    </nav>
    <p class="content">Group presentation for Science, Technology, &amp; Values on how the internet is build on trust and the complications that can arise from violation of that social construct.</p>

    <embed-page src="https://docs.google.com/presentation/d/e/2PACX-1vQMb_BlbGitZZPAL2ddiLQcyiUhTXHyzO-IFW3dXD51R_UJDMkLSwLXD5_OBDv5uDxoyFGv156oR08R/embed"/>
  </article>
</template>

<script>
import EmbedPage from '~/components/EmbedPage.vue'

export default {
  components: {
    EmbedPage
  }
}
</script>
