<script setup>
    import { provide, ref } from 'vue';

    const postsList = ref([]);

    provide('posts', postsList);
    function createPost(post) {
        postsList.value.push({
            id: crypto.randomUUID(),
            ...post
        });
    }
</script>


<template>

    <RouterView
        @createPost="createPost"
    />

</template>

<style scoped>

</style>