<script setup>

    import { useRouter } from 'vue-router';

    const router = useRouter();


</script>

<template>

    <button type="button" @click="router.back()">Go back</button>

</template>

<style scoped>

</style>