<template>
  <div id="app">
    <div id="general" class="flex flex-wrap py-2 md:py-5 justify-center content-center bg-blue-900 fixed top-0 left-0 right-0 text-sm z-20 text-orange-100">
      <router-link class="hover:text-gray-400 px-3" to="/">Home</router-link> 
      <dropdown class=""/>
      <router-link class="hover:text-gray-400 px-3" to="/composition-projects">Composition Projects</router-link> 
      <router-link class="hover:text-gray-400 px-3" to="/tank-drums">Tank Drums</router-link> 
      <router-link class="hover:text-gray-400 px-3" to="/experience">Other Experiences</router-link> 
      <router-link class="hover:text-gray-400 px-3" to="/contact">Contact</router-link> 
      <router-link class="hover:text-gray-400 px-3" to="/resume">Resume</router-link> 
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <footer class="flex justify-center bg-blue-900 py-20">
      <h1 id="general" class="text-white">&copy;2020 by Chris Wilson</h1>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Playfair+Display:ital,wght@1,400;1,600&family=Roboto:wght@300&display=swap');

.fade-enter-active, .fade-leave-active {

  transition: opacity .25s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#header {
  letter-spacing: 0.15rem;
  font-family: 'Montserrat', sans-serif;
}

#headerRobo {
  letter-spacing: 0.15rem;
  font-family: 'Roboto', sans-serif;
}

#headerItalic {
  font-weight: 600;
  letter-spacing: 0.15rem;
  font-family: 'Playfair Display', serif;
}

p, button, a, #general {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  font-family: 'Roboto', sans-serif;
}
</style>