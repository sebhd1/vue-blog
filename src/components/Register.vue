<script setup>
    import { ref } from 'vue';

    const user = ref({
        name: null,
        email: null,
        passwordOne: null,
        passwordTwo: null,
    })

    defineEmits([
        'create-user'
    ])

</script>

<template>

    <form @submit.prevent="$emit('create-user', user)" >
        <div>
            <label for="name">name: </label>
            <input  v-model="user.name" type="text" id="name" placeholder="E.g Jhonny.." required>
        </div>

        <div>
            <label for="email">email: </label>
            <input  v-model="user.email" type="email" id="email" placeholder="E.g Jhonny@gmail.com" required>
        </div>

        <div>
            <label for="passwordOne">password: </label>
            <input  v-model="user.passwordOne" type="password" id="passwordOne" placeholder=" ... " required>
        </div>

        <div>
            <label for="passwordTwo">password: </label>
            <input  v-model="user.passwordTwo" type="password" id="passwordTwo" placeholder=" ... " required>
        </div>

        <button type="submit">
            Register
        </button>
    </form>

</template>

<style scoped>

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;


        & button {
            width: 100%;
        }

        & input {
            width: 100%;
            padding: 0.30em;
            border: 2px solid transparent;
            border-radius: 10px;
        }
    }

</style>