<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
 <div>
   <div>
   <ul class="list-none flex justify-center place-items-center">
       <li class="ml-2 hover:text-green-700 underline text-blue-500"><router-link to="/"><a href="">Home</a></router-link></li>
     <li class="ml-2 hover:text-green-700 text-blue-500 underline"><router-link to="/about"><a href="">About</a></router-link></li>
   </ul>
   </div>
<router-view/>
 </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
