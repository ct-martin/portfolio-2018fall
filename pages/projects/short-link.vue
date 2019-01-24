<template>
  <article class="container">
    <h1>Short-Link</h1>
    <p>URL link shortener, similar to bit.ly, etc. Supports tracking of clicks, including geolocation (if behind Cloudflare), referrer, & user agent.</p>
    <p>Frontend built using <strong>React</strong> &amp; Semantic UI. Backend is mostly <strong>Node.js</strong> &amp; MongoDB. Heroku &amp; Dokku are supported for deployment.</p>

    <b-carousel controls indicators>
      <b-carousel-slide text="Stats Summary" img-src="/img/projects/slink-link-summary.jpg" />
      <b-carousel-slide text="Link List" img-src="/img/projects/slink-list.jpg" />
      <b-carousel-slide text="Link Shortening" img-src="/img/projects/slink-shorten.jpg" />
    </b-carousel>

    <br />
    <a class="btn btn-primary d-block" href="https://github.com/ct-martin/Short-Link" target="_blank"><span class="fa fa-fw fa-github"></span> View on GitHub</a>
  </article>
</template>
