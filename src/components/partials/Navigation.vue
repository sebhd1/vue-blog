<script setup>

</script>

<template>
   <nav>
       <RouterLink :to="{name:'home'}">Go to Home</RouterLink>
       <RouterLink :to="{name:'login'}">Login</RouterLink>
       <RouterLink :to="{name:'register'}">Register</RouterLink>

       <RouterLink :to="{name:'post'}">Post</RouterLink>

       <RouterLink :to="{name:'posts'}">post list</RouterLink>

       <RouterLink :to="{name:'post-create'}">create a post</RouterLink>
       <RouterLink :to="{name:'post-edit'}">edit a post</RouterLink>
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