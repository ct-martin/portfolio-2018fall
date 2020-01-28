<template>
  <div>
    <section v-swiper:mySwiper="swiperOptions">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="hero is-medium is-info is-bold">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Christian Martin
                </h1>
                <p class="subtitle">
                  <strong>Front-End Developer, Interactive Developer</strong><br>
                  Available for Full-Time in May/June
                </p>
                <p>
                  Studying New Media Interactive Development &amp; Museum Studies<br >
                  at Rochester Institute of Technology
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-for="project in meta.featured" :key="project" class="swiper-slide">
          <nuxt-link v-if="project.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) !== 0" :to="project.url" class="hero is-medium is-light is-bold" :style="{ backgroundImage: project.image ? 'url(' + project.image + ')' : '' }" style="background-size:cover;">
            <div class="hero-body">
              <div class="container">
                <h1 class="title"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</h1>
                <p class="subtitle">{{ project.description }}</p>
              </div>
            </div>
          </nuxt-link>
          <a v-else :href="project.url" class="hero is-medium is-light is-bold" :style="{ backgroundImage: project.image ? 'url(' + project.image + ')' : '' }" style="background-size:cover;">
            <div class="hero-body">
              <div class="container">
                <h1 class="title"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"/> {{ project.name }}</h1>
                <p class="subtitle">{{ project.description }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div slot="button-prev" class="swiper-button-prev"/>
      <div slot="button-next" class="swiper-button-next"/>
      <div class="swiper-pagination swiper-pagination-bullets"/>
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
            <project-card :project="project" />
          </div>
        </div>
      </div>
      <p v-else>Nothing to see; try a less specific filter</p>
    </section>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
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
    let featured = [];
    this.$store.state['content'].list.forEach((i) => {
      if(i.featured) {
        featured.push(i);
      }
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
        featured,
        tags
      },
      selectedCategories: Array.from(categories),
      selectedTags: Array.from(tags),
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnIntegration: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
