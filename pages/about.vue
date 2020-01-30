<template>
  <article class="container">
    <div class="print-hidden">
      <h1 class="title">About <nuxt-link to="/resume" class="button is-danger"><span aria-hidden="true" class="fa fa-fw fa-file-pdf-o"/>&nbsp;Resume</nuxt-link></h1>

      <p>
        Front-End Developer, Interactive Developer
        <br >
        Studying New Media Interactive Development &amp; Museum Studies at Rochester Institute of Technology
      </p>

      <h2 class="title" style="margin-bottom:.25em;margin-top:.5em;">Contact Info</h2>
      <div class="panel">
        <div class="panel-block">
          <span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-github"/></span>
          <span><a href="https://github.com/ct-martin" target="_blank" rel="noopener">GitHub: @ct-martin</a></span>
        </div>
        <!--sse-->
        <div class="panel-block">
          <span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-comments-o"/></span>
          <span>IRC: ctmartin on <a href="https://freenode.net/" target="_blank" rel="noopener">FreeNode</a> &amp; <a href="https://matrix.org/" target="_blank" rel="noopener">Matrix</a></span>
        </div>
        <div class="panel-block">
          <span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-linkedin-square"/></span>
          <span><a href="https://www.linkedin.com/in/ct-martin/" target="_blank" rel="noopener">LinkedIn: /in/ct-martin</a></span>
        </div>
        <div class="panel-block">
          <span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-handshake-o"/></span>
          <span><a href="https://rit.joinhandshake.com/users/6938294" target="_blank" rel="noopener">Handshake</a></span>
        </div>
        <!--/sse-->
      </div>

      <h2 class="title" style="margin-bottom:.25em;margin-top:.5em;">Skills</h2>
      <div id="skillset" class="columns">
        <div class="column">
          <div class="card" style="margin-top: .75rem;">
            <div class="card-content">
              <h4 class="subtitle">Programming</h4>
            </div>
            <div class="panel">
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> <strong>Angular</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> <strong>Node.js</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> <strong>JavaScript</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-cloud"/></span> PHP</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> <strong>React</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> <strong>SASS/SCSS</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> <strong>TypeScript</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> <strong>Vue</strong></div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card" style="margin-top: .75rem;">
            <div class="card-content">
              <h4 class="subtitle">Technologies</h4>
            </div>
            <div class="panel">
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-cloud"/></span> Apache</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-tasks"/></span> <strong>Continuous Integration (CI)</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code-fork"/></span> <span><strong>Git</strong>, inc. GitHub &amp; GitLab</span></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-database"/></span> MariaDB/MySQL</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-database"/></span> MongoDB</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-cloud"/></span> Nginx</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-database"/></span> Redis</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card" style="margin-top: .75rem;">
            <div class="card-content">
              <h4 class="subtitle">Platforms</h4>
            </div>
            <div class="panel">
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-cloud"/></span> <strong>Docker</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-cloud"/></span> <strong>Heroku</strong></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-linux"/></span> <span><strong>Linux</strong> (Debian &amp; RedHat families)</span></div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-cloud"/></span> <span><strong>Virtualization</strong> (QEMU/KVM-based, ESXi)</span></div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card" style="margin-top: .75rem;">
            <div class="card-content">
              <h4 class="subtitle">Other</h4>
            </div>
            <div class="panel">
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> C#</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> Python</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-code"/></span> Java</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-cloud"/></span> Networking</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-cloud"/></span> Systems Administration</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-gamepad"/></span> Unity</div>
              <div class="panel-block"><span class="panel-icon"><span aria-hidden="true" class="fa fa-fw fa-gamepad"/></span> Unreal Engine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="print-only">
      <h1>
        There's a page with a PDF copy of this page linked at the top right in red; this page doesn't print well.
      </h1>
    </div>
  </article>
</template>

<style>
@media print {
  .navbar, .footer {
    display: none;
  }
}
</style>
