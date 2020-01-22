<template>
  <article class="container">
    <h1 class="title"><span class="fa fa-book fa-fw"/> Articles</h1>
    <p>Here is a subset of the posts on my blog, excluding those for classes or projects (which would be on the Projects page).</p>
    <br>
    <a class="button is-link is-fullwidth" href="https://blog.ctmartin.me/" style="margin-bottom:1.5em;">Click here for entire blog</a>
    <a v-for="project in this.$store.state.articles.list" :href="project.url" :key="project.name" class="card is-block">
      <div class="card-content">
        <h4 class="title is-4">{{ project.name }}</h4>
        <p v-if="project.subtitle || project.badge" class="subtitle">
          {{ project.subtitle }}
          <span v-if="project.badge" class="tag">{{ project.badge }}</span>
        </p>
        <p>{{ project.description }}</p>
        <!--<b-link v-if="article.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) === 0" :href="article.url" class="card-link">Read</b-link>
        <b-link v-if="article.url.search(/^http[s]{0,1}:\/\/(.*)/gmi) !== 0" :to="article.url" class="card-link">Read</b-link>-->
      </div>
    </a>
  </article>
</template>
