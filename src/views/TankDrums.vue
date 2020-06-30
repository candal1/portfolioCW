<template>
    <div class="bg-orange-100">
        <div class="flex flex-col items-center py-20 px-16 gap-20">
            <span id="header" class="uppercase font-bold text-5xl tracking-widest">Tank Drums</span>
            <div class="inline-flex"> 
                <iframe class="flex-shrink-0" width="560" height="315" src="https://www.youtube.com/embed/usLr2kqaPnc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p class="max-w-md pl-10 pt-5">I make tank drums. This has been a personal project of mine for a few years now. I take propane tanks and fabricate them into a useable and practical final product. Each drum has a single "scale" comprised of 4-9 notes and each note is arranged in a way that makes playing feel natural. This makes these drums become viable instruments to use for liesure playing, composing, and recording. My goal is to make the loudest and cleanest sounding drums.</p>
            </div>
            <div class="inline-flex mr-16"> 
                <iframe class="mr-32 flex-shrink-0" width="560" height="315" src="https://www.youtube.com/embed/zOB6GYASk44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <span class="pt-32 ">
                    <router-link class="bg-blue-800 text-white text-center hover:bg-blue-900 px-4 py-2 mx-10" to="/fabrication-process">Fabrication Process</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TankDrums'
    }
</script>