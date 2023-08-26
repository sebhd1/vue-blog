<script setup>
    import { ref, provide, readonly } from 'vue';
    import Navigation from './components/Navigation.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const loggedUser = ref(null);
    const registeredUsers = ref([

        {
            id: crypto.randomUUID(),
            name: 'seb',
            email: 'admin1@admin.com',
            password: '123'
        }
    ]);

    function createUser(user) {
        registeredUsers.value.push({
            id: crypto.randomUUID(),
            ...user
        });
    }

    function login(user) {
        console.log('Attempting login for user:', user);
        const userFound = registeredUsers.value.find(registeredUser => {
            return registeredUser.email === user.email &&
                registeredUser.password === user.password;
        });

        if (userFound) {

            loggedUser.value = {
                id: userFound.id,
                name: userFound.name,
                email: userFound.email,
            }

            console.log('logged user', loggedUser.value)
        }

        if (!loggedUser.value) {
            console.log('Login failed');
        }
    }

    function logout() {
        loggedUser.value = null;
        router.push({ name: 'home' })
    }

    provide('user', {
        user: readonly(loggedUser),
        logout,
    });

</script>

<template>

    <Navigation />

    <RouterView
        @createUser="createUser"
        @login="login"
    />
</template>

<style>

</style>