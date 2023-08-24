<script setup>
    import { ref, provide, readonly } from 'vue';
    import Navigation from './components/partials/Navigation.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const loggedUser = ref(null);
    const registeredUsers = ref ([]);
    const postLists = ref([]);

    provide('posts', {
        posts: postLists,
    });

    provide('user', {
        user: readonly(loggedUser),
        logout,
    });

    function createUser(user){
        registeredUsers.value.push({
            id: crypto.randomUUID(),
            ... user
        });
    }

    function login(user) {
        console.log('Attempting login for user:', user);
        registeredUsers.value.forEach(registeredUser => {
            if (registeredUser.email === user.email && registeredUser.password === user.password) {
                loggedUser.value = user;
                console.log('Logged in successfully!', user);
            }
        });

        if (!loggedUser.value) {
            console.log('Login failed');
        }
    }

    function logout() {
        loggedUser.value = null;
        router.push({name: 'home'})
    }

    function createPost(post) {
        postLists.value.push(post);
    }
</script>

<template>

    <Navigation/>

    <RouterView
        @CreateUser="createUser"
        @login="login"
        @createPost="createPost"
    />
</template>

<style>

</style>