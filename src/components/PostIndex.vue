<script setup>
import { inject } from 'vue';
const { posts } = inject('posts');

</script>

<template>

    <div v-for="post in posts" :key="post.id">

        <p>{{post.title}}</p>
        <p>{{post.slug}}</p>
        <p>{{post.content}}</p>
    </div>

</template>

<style scoped>

</style>