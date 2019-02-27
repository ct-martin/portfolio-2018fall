<template>
  <div class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/battleship" aria-current="page">Battleship</nuxt-link></li>
      </ul>
    </nav>

    <div class="columns">
      <b-collapse :open.sync="isOpen" class="panel column is-3">
        <p slot="trigger" slot-scope="props" class="panel-heading">
          Sections
          <span class="icon fa is-pulled-right" :class="props.open ? 'fa-caret-down' : 'fa-caret-up'"></span>
        </p>
        <nuxt-link class="panel-block" :to="section.link" v-for="section in sections" :key="section.title">{{section.title}}</nuxt-link>
      </b-collapse>

      <article class="column is-9 content">
        <nuxt-child />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      sections: [
        { title: 'Introduction', link: '' },
        { title: 'Designing for a touch medium', link: 'designing-for-touch' },
        { title: 'Hardware troubleshooting', link: 'hardware-troubles' },
        { title: 'Experience concept', link: 'experience-concept' },
        { title: 'Pains of stateless state management', link: 'stateless-states' },
      ].map(item => {
        const listitem = item;
        listitem.link = `/projects/battleship/${item.link}`;
        return listitem;
      })
    }
  }
}
</script>
