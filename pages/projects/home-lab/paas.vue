<template>
  <div>
    <h2 class="title">PaaS (Platform as a Service)</h2>

    <p>
      I'm running <a href="http://dokku.viewdocs.io/dokku/" target="_blank">Dokku</a> for my PaaS server.
      While not the most powerful, it can run the Heroku buildpacks &amp; manage routing, which is enough for my needs.
      Additionally, other solutions I've looked at have a high overhead to set up.
    </p>

    <p>
      I'm experiementing with running Dokku using <a href="https://podman.io/" target="_blank">Podman</a> instead of Docker.
      Podman is a daemonless container runtime, which also means I don't need to run containers as root.
    </p>

  </div>
</template>
