<template>
<div>
  <article class="container">
    <p>Student, Developer, Creative Technologist, Computing Generalist; Studying New Media Interactive Development at RIT.</p>
  </article>
  <div class="container" id="homeCards">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="card" style="background:darkorchid;color:white;">
          <div class="card-body">
            <h3 class="card-title">Design &amp; Interactivity</h3>
          </div>
          <custom-list-group source="content" tag="home-design-ux" />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card" style="background:royalblue;color:white;">
          <div class="card-body">
            <h3 class="card-title">Cloud</h3>
          </div>
          <custom-list-group source="content" tag="home-cloud" />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card" style="background:goldenrod;color:white;">
          <div class="card-body">
            <h3 class="card-title">Web</h3>
          </div>
          <custom-list-group source="content" tag="home-web" />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card" style="background:firebrick;color:white;">
          <div class="card-body">
            <h3 class="card-title">More</h3>
          </div>
          <custom-list-group source="content" tag="home-more" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CustomListGroup from '~/components/CustomListGroup.vue'

export default {
  components: {
    CustomListGroup
  },
}
</script>
