<template>
  <div id="app">
    <div class="flex gap-10 py-5 justify-center content-center bg-blue-900 text-white fixed top-0 left-0 right-0 text-sm">
      <router-link class="transition ease-in-out duration-300 transform hover:scale-125 hover:text-gray-300" to="/">Home</router-link> 
      <router-link class="transition ease-in-out duration-300 transform hover:scale-125 hover:text-gray-300" to="/">Sound Projects</router-link> 
      <router-link class="transition ease-in-out duration-300 transform hover:scale-125 hover:text-gray-300" to="/composition-projects">Composition Projects</router-link> 
      <router-link class="transition ease-in-out duration-300 transform hover:scale-125 hover:text-gray-300" to="/">Tank Drums</router-link> 
      <router-link class="transition ease-in-out duration-300 transform hover:scale-125 hover:text-gray-300" to="/">Other Experiences</router-link> 
      <router-link class="transition ease-in-out duration-300 transform hover:scale-125 hover:text-gray-300" to="/">Contact</router-link> 
      <router-link class="transition ease-in-out duration-300 transform hover:scale-125 hover:text-gray-300" to="/">Resume</router-link> 
    </div>
    <router-view/>
    <footer class="flex justify-center bg-blue-900 py-16">
      <h1 class="text-white">&copy;2020 by Chris Wilson</h1>
    </footer>
  </div>
</template>

