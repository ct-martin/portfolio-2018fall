<template>
<div>
  <article class="container">
    <p>Student, Developer, Creative Technologist, Open Sorcerer, Explorer; Studying New Media Interactive Development at RIT.</p>
  </article>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="project in this.$store.state.projects.list.filter(item => item.tags.includes('home'))" :key="project.name">
        <b-card :title="project.name">
          <p class="card-text">
            {{ project.description }}
          </p>
        </b-card>
      </div>
    </div>
  </div>
  </div>
</template>
