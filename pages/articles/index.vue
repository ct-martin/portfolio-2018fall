<template>
  <div class="container">
    <h1><span class="fa fa-fw fa-book"></span> Articles</h1>
    <p>Here is a subset of the posts on my blog, excluding those for classes or projects (which would be on the Projects page).</p>
    <a class="btn btn-primary d-block" href="https://blog.ctmartin.me/">Click here for entire blog</a>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="article in this.$store.state.articles.list" :key="article.name">
        <b-card :title="article.name"
          :sub-title="article.subtitle"
          style="margin-top:.75rem;">
          <b-badge v-if="article.badge">{{ article.badge }}</b-badge>
          <p class="card-text">
            {{ article.description }}
          </p>
          <b-link v-if="article.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) === 0" :href="article.url" class="card-link">Read</b-link>
          <b-link v-if="article.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) !== 0" :to="article.url" class="card-link">Read</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>
