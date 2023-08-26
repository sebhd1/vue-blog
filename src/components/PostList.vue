<script setup>
import { inject } from 'vue';
const posts = inject('posts');

</script>

<template>

    <article v-for="post in posts" :key="post.id">

        <header id="post-header">
            <router-link :to="{ name:'posts.show', params:{id: post.id} }">
                <h3>{{post.title}}</h3>
            </router-link>
            <span>
                posted by:
                {{post.author.name ?? 'undefined'}}
            </span>
        </header>
    </article>

</template>

<style scoped>

    #post-header {

        & span {
            font-weight: lighter;
            font-size: 1em;
        }
    }
</style>