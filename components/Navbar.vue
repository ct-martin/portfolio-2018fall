<template>
  <b-navbar fixed-top wrapper-class="container">
    <template slot="brand">
      <b-navbar-item class="has-text-weight-bold" tag="nuxt-link" to="/">Christian Martin</b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="nuxt-link" to="/">Home</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/about">About</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/projects">Projects</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/talks">Talks</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/articles">Articles</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="a" href="https://blog.ctmartin.me/">Blog</b-navbar-item>
    </template>
  </b-navbar>
</template>