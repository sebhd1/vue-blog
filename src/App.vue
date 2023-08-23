<script setup>
import { ref } from 'vue';
import Navigation from './components/partials/Navigation.vue';

const registeredUsers = ref ([]);

function createUser(user){
    registeredUsers.value.push({
        id: crypto.randomUUID(),
        ... user
    })
}

</script>

<template>

    <Navigation/>

    <RouterView />
</template>

<style>

</style>
