<template>
  <div class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/projects/home-lab" aria-current="page">Home Lab</nuxt-link></li>
      </ul>
    </nav>

    <div class="columns">
      <b-collapse :open.sync="isOpen" class="panel column is-3">
        <p slot="trigger" slot-scope="props" class="panel-heading">
          Sections
          <span :class="props.open ? 'fa-caret-down' : 'fa-caret-up'" class="icon fa is-pulled-right"/>
        </p>
        <nuxt-link v-for="section in sections" :to="section.link" :key="section.title" class="panel-block">{{ section.title }}</nuxt-link>
      </b-collapse>

      <article class="column is-9 content">
        <nuxt-child />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: true,
      sections: [
        { title: 'Introduction', link: '' },
        { title: 'Virtualization', link: 'virtualization' },
        { title: 'Networking & Firewall', link: 'networking-firewall' },
        { title: 'NAS', link: 'nas' },
        /* { title: 'Windows Workstation VM', link: 'windows-ws-vm' }, */
        { title: 'Local Git & CI/CD', link: 'git-ci-cd' },
        { title: 'PaaS', link: 'paas' }
        /* { title: 'Project History', link: 'history' }, */
      ].map((item) => {
        const listitem = item
        listitem.link = `/projects/home-lab/${item.link}`
        return listitem
      })
    }
  }
}
</script>
