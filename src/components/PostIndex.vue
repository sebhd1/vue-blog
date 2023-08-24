<script setup>

import Post from './Post.vue';
import { ref } from 'vue';

const posts = ref([]);
</script>

<template>

    <div v-for="post in posts">

        <Post/>

    </div>

</template>

<style scoped>

</style>