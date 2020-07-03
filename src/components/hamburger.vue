<template>
    <div>
        <div id="general" class="flex flex-wrap py-2 md:py-5 justify-center content-center bg-blue-900 fixed top-0 left-0 right-0 text-sm z-20 text-orange-100">
        <router-link class="hover:text-gray-400 px-3" to="/">Home</router-link> 
        <dropdown class=""/>
        <router-link class="hover:text-gray-400 px-3" to="/composition-projects">Composition Projects</router-link> 
        <router-link class="hover:text-gray-400 px-3" to="/tank-drums">Tank Drums</router-link> 
        <router-link class="hover:text-gray-400 px-3" to="/experience">Other Experiences</router-link> 
        <router-link class="hover:text-gray-400 px-3" to="/contact">Contact</router-link> 
        <router-link class="hover:text-gray-400 px-3" to="/resume">Resume</router-link> 
    </div>
    </div>
</template>

<script>
import dropdown from '@/components/dropdown.vue'

    export default {
        
        components: {
            dropdown
        }
    }
</script>

<style lang="scss" scoped>

</style>