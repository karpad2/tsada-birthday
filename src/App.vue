<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<style>
@import "assets/main.css";
</style>

<template>
    <div class="bg-gray-200 h-screen flex justify-center items-center">
  <RouterView class="bg-white p-8 rounded-xl shadow-lg w-2/3 md:w-1/2 lg:w-1/3 border-t-8 border-blue-500" />
  </div>
</template>


