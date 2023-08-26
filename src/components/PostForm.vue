<script setup>
    import { inject, defineEmits, ref } from 'vue';

    defineEmits([
        'create-post',
    ])

    const { user } = inject('user');

    const post = ref({
        title: '',
        slug: '',
        content: '',
        author: {
            id: user.value.id,
            name: user.value.name,
        }
    });
</script>
<template>
    <form @submit.prevent="$emit('create-post', post)">
        <div>
            <label for="title">Title:</label>
            <input v-model.trim="post.title" type="text" id="title" required>
        </div>

        <div>
            <label for="slug">Slug:</label>
            <input v-model.trim="post.slug" type="text" id="slug" required>
        </div>

        <div>
            <label for="content">Content:</label>
            <textarea v-model.trim="post.content" id="content"></textarea>
        </div>

        <button type="submit">Create</button>
    </form>
</template>

<style scoped>
    /* Your styles here */
</style>
