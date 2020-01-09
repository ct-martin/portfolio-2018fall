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

    <!--<br >
    <div id="heroCards" class="container">
      <h3 class="title">Projects</h3>
      <div class="columns">
        <nuxt-link v-for="project in this.$store.state['content'].list.filter(item => item.tags.includes('home-hero'))" :to="project.url" :key="project.name" class="column">
          <div class="card">
            <div class="card-content">
              <h4 class="title is-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</h4>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <br >

    <div id="homeCards" class="container">
      <h3 class="title">Articles &amp; Talks</h3>
      <custom-list-group source="content" tag="home-more" />
    </div>-->

    <!-- <nuxt-link v-for="project in this.$store.state.talks.list" :to="project.url" :key="project.name" class="card is-block"> -->
    <br>
    <section class="container">
      <b-dropdown
        aria-role="list"
        hoverable
        multiple
        v-model="selectedCategories"
      >
        <button class="button" slot="trigger">
          <span class="fa fa-fw fa-filter"></span>
          <span>Categories ({{selectedCategories.length}})</span>
          <span class="fa fa-fw fa-caret-down"></span>
        </button>

        <b-dropdown-item
          aria-role="listitem"
          v-for="cat in meta.categories"
          :key="cat"
          :value="cat"
        >
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
          <span>{{tag}}</span>
        </b-dropdown-item>
      </b-dropdown>
      <hr>
      <div v-if="filteredItems.length">
        <div class="columns is-multiline">
          <nuxt-link v-for="project in filteredItems" :to="project.url" :key="project.name" class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
            <div class="card">
              <div class="card-content">
                <h4 class="title is-4"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</h4>
                <p>{{ project.description }}</p>
              </div>
            </div>
          </nuxt-link>
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
        if(!t.startsWith('home-') && !tags.includes(t)) {
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
