<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Fireworks } from '@fireworks-js/vue'
import HomeView from './views/HomeView.vue';
</script>
<style>
@import "assets/main.css";

</style>
 
<template>
    <div class="bg-slate-900 h-screen flex justify-center items-center">
  <HomeView class="bg-slate-700 backdrop-blur-sm  p-9 rounded-xl shadow-lg w-2/3 md:w-1/2 lg:w-1/3 border-t-8 border-blue-500" style="z-index: 4;" />
  <Fireworks
      style="z-index: 5;"
    
  
    :autostart="true"
    
    :style="{
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      position: 'fixed',
      
      
    }"
  />
  </div>
</template>


