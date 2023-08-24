<script setup>
    //title (`string`),
    // slug (`string`),
    // content (`string`),
    // author {id: `string(UUID)`,
    // name: `string`}
    // and comment (`string`).

    import { ref } from 'vue';

    const post = ref({
        title: null,
        slug: null,
        content: null,
    });

</script>

<template>

    <form @submit.prevent="$emit('')">
        <div>
            <label for="title">title: </label>
            <input v-model="post.title" type="text" id="title" placeholder="E.g A beautiful.." required>
        </div>

        <div>
            <label for="name">slug: </label>
            <input v-model.trim="post.slug" type="text" id="slug" placeholder="E.g A beautiful.." required>
        </div>

        <div>
            <label for="content">content: </label>
            <textarea v-model="post.title" id="content" placeholder="E.g A beautiful swoosh.." ></textarea>
        </div>


        <button type="submit">x</button>
    </form>


</template>

<style scoped>

</style>