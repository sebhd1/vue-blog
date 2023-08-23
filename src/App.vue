<script setup>
    import { ref, provide, readonly } from 'vue';
    import Navigation from './components/partials/Navigation.vue';

    const loggedUser = ref(null);

    function logout() {
        loggedUser.value = null;
    }

    provide('user', {
        user: readonly(loggedUser),
        logout,
    });


    const registeredUsers = ref ([]);


    function createUser(user){
        registeredUsers.value.push({
            id: crypto.randomUUID(),
            ... user
        })
    }

    function login(user) {

        registeredUsers.value.forEach(registeredUser => {
            if (registeredUser.email === user.email && registeredUser.password === user.password) {
                loggedUser.value = user.value;
            }
        });

        if (loggedUser.value) {
            console.log('Logged in successfully!');
        } else {
            console.log('Login failed');
        }
    }
</script>

<template>

    <Navigation/>

    <RouterView
        @CreateUser="createUser"

        @login="login"

    />
</template>

<style>

</style>
