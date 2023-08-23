<script setup>

    import { ref } from 'vue';

    const user = ref({
        email: null,
        password: null
    })

    defineEmits([
        'login'
    ])

</script>

<template>

    <form @submit.prevent="$emit('login', user.value)">
        <div>
            <label for="email">email: </label>
            <input  v-model="user.email" type="email" id="email" placeholder="E.g Jhonny@gmail.com" required>
        </div>

        <div>
            <label for="password">password: </label>
            <input  v-model="user.password" type="password" id="password" placeholder=" ... " required>
        </div>

        <button type="submit">
            Login
        </button>
    </form>

</template>

<style>

    .warning-text {
        color: darkred;
        font-weight: bold;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;


        & input {
            width: 100%;
            padding: 0.30em;
            border: 2px solid transparent;
            border-radius: 10px;
        }
    }

</style>
