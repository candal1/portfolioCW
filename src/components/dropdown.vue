<template>
    <div class="flex flex-col" @mouseover="showDrop = true"  @mouseleave="showDrop = false">
        <span class="px-5"> Sound Projects </span>
        <div class="inline-block">
            <div v-if="showDrop" class="inline-flex flex-col absolute z-10 bg-blue-900 px-5 pt-5 pb-2 gap-2">
                <router-link class="hover:text-gray-400" to="/recordings"> Recording Projects </router-link> 
                <router-link class="hover:text-gray-400" to="/live-sound"> Live Sound Projects </router-link>
                <router-link class="hover:text-gray-400" to="/sound-for-video"> Sound for Video Projects </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dropdown',
        data () {
            return {
                showDrop: false
            }
        }
    }
</script>