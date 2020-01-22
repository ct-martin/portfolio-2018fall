<template>
  <div>
    <section class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Christian Martin
          </h1>
          <h2 class="subtitle">
            Front-End Developer, Interactive Developer
            <br >
            Studying New Media Interactive Development &amp; Museum Studies<br >
            at Rochester Institute of Technology
          </h2>
        </div>
      </div>
    </section>

    <br>
    <section class="container">
      <b-dropdown
        aria-role="list"
        hoverable
        multiple
        v-model="selectedCategories"
      >
        <button class="button" slot="trigger">
          <span class="fa fa-fw fa-folder"></span>
          <span>Categories ({{selectedCategories.length}})</span>
          <span class="fa fa-fw fa-caret-down"></span>
        </button>

        <b-dropdown-item
          aria-role="listitem"
          v-for="cat in meta.categories"
          :key="cat"
          :value="cat"
        >
            <span v-if="selectedCategories.includes(cat)" class="fa fa-fw fa-check-square-o"></span>
            <span v-else class="fa fa-fw fa-square-o"></span>
          <span>{{cat}}</span>
        </b-dropdown-item>
      </b-dropdown>

      <b-dropdown
        aria-role="list"
        hoverable
        multiple
        v-model="selectedTags"
      >
        <button class="button" slot="trigger">
          <span class="fa fa-fw fa-tag"></span>
          <span>Tags ({{selectedTags.length}})</span>
          <span class="fa fa-fw fa-caret-down"></span>
        </button>

        <b-dropdown-item
          aria-role="listitem"
          v-for="tag in meta.tags"
          :key="tag"
          :value="tag"
        >
          <span>
            <span v-if="selectedTags.includes(tag)" class="fa fa-fw fa-check-square-o"></span>
            <span v-else class="fa fa-fw fa-square-o"></span>
            {{tag}}
          </span>
        </b-dropdown-item>
      </b-dropdown>
      <hr>
      <div v-if="filteredItems.length">
        <div class="columns is-multiline">
          <div v-for="project in filteredItems" class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
            <nuxt-link v-if="project.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) !== 0" :to="project.url" class="card is-block">
              <div class="card-content">
                <span class="is-size-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</span>
                <p>{{ project.description }}</p>
                <b-taglist style="margin-top:0.5em;"><b-tag><span class="fa fa-fw fa-folder"></span> {{project.category}}</b-tag><b-tag v-for="tag in project.tags" :key="tag"><span class="fa fa-fw fa-tag"></span> {{tag}}</b-tag></b-taglist>
              </div>
            </nuxt-link>
            <a v-else :href="project.url" class="card is-block" target="_blank" rel="noopener">
              <div class="card-content">
                <span class="is-size-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</span>
                <p>{{ project.description }}</p>
                <b-taglist style="margin-top:0.5em;"><b-tag><span class="fa fa-fw fa-folder"></span> {{project.category}}</b-tag><b-tag v-for="tag in project.tags" :key="tag"><span class="fa fa-fw fa-tag"></span> {{tag}}</b-tag></b-taglist>
              </div>
            </a>
          </div>
        </div>
      </div>
      <p v-else>Nothing to see; try a less specific filter</p>
    </section>
  </div>
</template>

<script>
import CustomListGroup from '~/components/CustomListGroup.vue'

export default {
  components: {
    CustomListGroup
  },
  computed: {
    filteredItems() {
      return this.$store.state['content'].list
        .filter(item => 
          this.selectedCategories.includes(item.category)
          && this.selectedTags.some(
            (t) => item.tags.includes(t)
          )
        );
    }
  },
  data() {
    let categories = [];
    let tags = [];
    this.$store.state['content'].list.forEach((i) => {
      if(!categories.includes(i.category)) {
        categories.push(i.category);
      }
      i.tags.forEach((t) => {
        if(!tags.includes(t)) {
          tags.push(t);
        }
      })
    });
    return {
      meta: {
        categories,
        tags
      },
      selectedCategories: Array.from(categories),
      selectedTags: Array.from(tags)
    }
  }
}
</script>
