<script setup>
    import { onMounted, inject } from 'vue';

    const { logout }  = inject('user');

    onMounted(() => {
        console.log('logout mounted')
        logout();
    });
</script>
