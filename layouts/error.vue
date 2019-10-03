<template>
    <article class="container">
        <h1 class="title" v-if="error.statusCode === 404">404 - Page Not Found</h1>
        <h1 class="title" v-else>An error occurred</h1>

        <p>When you look into the <code>void</code>, the <code>void</code> also looks into you.</p>
        <nuxt-link to="/">Back to home</nuxt-link>
    </article>
</template>

<script>
export default {
    props: ['error']
}
</script>