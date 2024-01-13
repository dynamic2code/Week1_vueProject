<script setup>
import {RouterView } from 'vue-router'
// import { onMounted } from 'vue';
// import { useRouter } from 'vue-router';

// const router = useRouter();
</script>

<template>
  <!-- <router-link to="{name: '/'}"></router-link>
  <router-link to="{name: 'home'}"></router-link>
  <router-link to="{name: 'profile'}"></router-link> -->
  <div class="the_body">
    <router-view></router-view>
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
