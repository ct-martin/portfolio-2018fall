<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="project in this.$store.state.projects.list" :key="project.name">
        <div class="card" style="margin-top:.75rem;">
          <div class="card-body">
            <h4 class="card-title"><span v-if="project.icon" :class="project.icon" class="fa fa-fw"></span> {{ project.name }}</h4>
            <p class="text-muted" v-if="project.subtitle || project.badge">
              {{ project.subtitle }}
              <b-badge v-if="project.badge">{{ project.badge }}</b-badge>
            </p>
            <p class="card-text">{{ project.description }}</p>
            <b-link :to="project.url" class="card-link">Explore</b-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
