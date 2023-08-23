<script setup>
import Register from './components/Register.vue';
import { ref } from 'vue';

const registeredUsers = ref ([]);

function createUser(user){
    registeredUsers.value.push({
        id: crypto.randomUUID(),
        ... user
    })

    console.log(user)
}

</script>

<template>

    <Register
        @create-user="createUser"
    />
</template>

<style>

</style>
