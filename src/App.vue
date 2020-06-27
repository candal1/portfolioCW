<template>
  <div id="app">
    <div class="flex py-5 justify-center content-center bg-blue-900 text-white fixed top-0 left-0 right-0 text-sm z-20">
      <router-link class="hover:text-gray-400 px-3" to="/">Home</router-link> 
      <dropdown class=""/>
      <router-link class="hover:text-gray-400 px-3" to="/composition-projects">Composition Projects</router-link> 
      <router-link class="hover:text-gray-400 px-3" to="/tank-drums">Tank Drums</router-link> 
      <router-link class="hover:text-gray-400 px-3" to="/experience">Other Experiences</router-link> 
      <router-link class="hover:text-gray-400 px-3" to="/contact">Contact</router-link> 
      <router-link class="hover:text-gray-400 px-3" to="/resume">Resume</router-link> 
    </div>
    <router-view/>
    <footer class="flex justify-center bg-blue-900 py-20">
      <h1 class="text-white">&copy;2020 by Chris Wilson</h1>
    </footer>
  </div>
</template>

<script>
import dropdown from '@/components/dropdown.vue'

export default {
 name: 'App',
 components: {
    dropdown
 }
}
</script>