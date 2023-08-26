<script setup>
import { useRoute } from 'vue-router';
import { inject } from 'vue';
import BackButton from './BackButton.vue';

const route = useRoute();

const posts = inject('posts');

const post = posts.value.find((post) => post.id === route.params.id );

</script>

<template>

    <article>

        <BackButton/>

        <header id="post-header">
            <h3>{{post.title}}</h3>
            <span>
                posted by:
                {{post.author.name ?? 'undefined'}}
            </span>
        </header>

        <div id="post-body">
            <p>{{post.content}}</p>
        </div>

    </article>


</template>

<style scoped>

</style>