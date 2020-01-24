<template>
    <nuxt-link v-if="project.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) !== 0" :to="project.url" class="card is-block">
        <div class="card-content">
        <span class="is-size-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</span>
        <p>{{ project.description }}</p>
        <b-taglist style="margin-top:0.5em;"><b-tag v-if="!nocategory"><span class="fa fa-fw fa-folder"></span> {{project.category}}</b-tag><b-tag v-for="tag in project.tags" :key="tag"><span class="fa fa-fw fa-tag"></span> {{tag}}</b-tag></b-taglist>
        </div>
    </nuxt-link>
    <a v-else :href="project.url" class="card is-block" target="_blank" rel="noopener">
        <div class="card-content">
        <span class="is-size-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</span>
        <p>{{ project.description }}</p>
        <b-taglist style="margin-top:0.5em;"><b-tag v-if="!nocategory"><span class="fa fa-fw fa-folder"></span> {{project.category}}</b-tag><b-tag v-for="tag in project.tags" :key="tag"><span class="fa fa-fw fa-tag"></span> {{tag}}</b-tag></b-taglist>
        </div>
    </a>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null
    },
    nocategory: {
      type: Boolean,
      default: false
    }
  }
}
</script>
