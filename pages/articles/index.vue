<template>
  <article class="container">
    <h1 class="title"><span class="fa fa-book fa-fw"></span> Articles</h1>
    <p>Here is a subset of the posts on my blog, excluding those for classes or projects (which would be on the Projects page).</p>
    <a class="button is-link is-fullwidth" href="https://blog.ctmartin.me/" style="margin-bottom:1.5em;">Click here for entire blog</a>
    <a :href="project.url" class="card is-block" v-for="project in this.$store.state.articles.list" :key="project.name">
      <div class="card-content">
        <h4 class="title is-4">{{ project.name }}</h4>
        <p class="subtitle" v-if="project.subtitle || project.badge">
          {{ project.subtitle }}
          <span class="tag" v-if="project.badge">{{ project.badge }}</span>
        </p>
        <p>{{ project.description }}</p>
        <!--<b-link v-if="article.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) === 0" :href="article.url" class="card-link">Read</b-link>
        <b-link v-if="article.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) !== 0" :to="article.url" class="card-link">Read</b-link>-->
      </div>
    </a>
  </article>
</template>
