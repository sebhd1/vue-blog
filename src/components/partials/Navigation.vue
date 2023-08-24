<script setup>
    import { inject } from 'vue';

    const {user, logout} = inject('user');

</script>

<template>
   <nav>

       <RouterLink :to="{name:'home'}">Go to Home</RouterLink>

       <template v-if="user">
           <RouterLink :to="{name:'posts'}">post list</RouterLink>
           <RouterLink :to="{name:'post-create'}">create a post</RouterLink>
           <router-link :to="{name: 'logout'}">Logout</router-link>
           <!--<RouterLink :to="{name:'post'}">Post</RouterLink>
       <RouterLink :to="{name:'post-edit'}">edit a post</RouterLink>-->
       </template>

       <template v-else>
           <RouterLink :to="{name:'login'}">Login</RouterLink>
           <RouterLink :to="{name:'register'}">Register</RouterLink>
       </template>
   </nav>
</template>

<style scoped>

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 2px solid white;
        padding: 1rem;
        width: 100%;
    }

</style>