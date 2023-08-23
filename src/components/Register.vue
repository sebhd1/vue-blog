<script setup>
    import { computed, ref, warn } from 'vue';

    const user = ref({
        name: null,
        email: null,
        password: '',
        password_confirm: '',
    })

    const isPasswordValid = computed(() => {
        return user.value.password === user.value.password_confirm;
    })

    const showPasswordWarning = computed(() => {
        return user.value.password.length > 0 &&
            user.value.password_confirm.length > 0 &&
            !isPasswordValid.value;
    })


    const emit = defineEmits([
        'create-user'
    ])

    function validateUser() {
        if(isPasswordValid.value) {
            emit('create-user', {
                name: user.value.name,
                email: user.value.email,
                password: user.value.password
            })
        }
    }
</script>

<template>
    <form @submit.prevent="validateUser">
        <div>
            <label for="name">name: </label>
            <input  v-model="user.name" type="text" id="name" placeholder="E.g Jhonny.." required>
        </div>

        <div>
            <label for="email">email: </label>
            <input  v-model="user.email" type="email" id="email" placeholder="E.g Jhonny@gmail.com" required>
        </div>

        <div>
            <label for="password">password: </label>
            <input  v-model="user.password" type="password" id="password" placeholder=" ... " required>
        </div>

        <div>
            <label for="password_confirm">password confirm: </label>
            <input  v-model="user.password_confirm" type="password" id="password_confirm" placeholder=" ... " required>
            <p class="warning-text" v-if="showPasswordWarning">the passwords do not match!</p>
        </div>



        <button type="submit">
            Register
        </button>
    </form>

</template>

<style scoped>

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