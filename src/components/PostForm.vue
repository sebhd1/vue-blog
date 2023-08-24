<script setup>
    import { inject, ref } from 'vue';
    defineEmits([
        'create-post'
    ])


    const { user } = inject('user');
    console.log(user.value)

    const post = ref({
        author: {
            id: user.value.id,
            name: user.value.name,
        },
        title: null,
        slug: null,
        content: null,
    });

</script>

<template>

    <form @submit.prevent="$emit('create-post', post.value)">
        <div>
            <label for="title">title: </label>
            <input v-model.trim="post.title" type="text" id="title" placeholder="E.g A beautiful.." required>
        </div>

        <div>
            <label for="name">slug: </label>
            <input v-model.trim="post.slug" type="text" id="slug" placeholder="E.g A beautiful.." required>
        </div>

        <div>
            <label for="content">content: </label>
            <textarea v-model.trim="post.content" id="content" placeholder="E.g A beautiful swoosh.." ></textarea>
        </div>

        <button type="submit">Create</button>
    </form>


</template>

<style scoped>

</style>