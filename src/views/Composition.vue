<template>
    <div class="bg-orange-100 overflow-hidden">
        <div class="flex flex-col items-center py-20 px-16 gap-20">
            <span id="header" class="font-bold text-5xl tracking-widest uppercase">Composition Projects</span>
            <div>
                <span id="headerItalic" class="text-4xl italic">Picasso at the Lapin<br>Agile</span>
                <span id="headerItalic" class="text-2xl italic"> <br>by Steve Martin</span><br>
                <span id="" class="text-2xl leading-loose">Composers: Chris Wilson, Drew Stockero</span>
            </div>
            <div class="md:inline-flex items-center">
                <img class="max-w-md md:max-w-lg" src="../assets/comp_1.jpg" alt="picasso stage view">
                <div class="inline-flex flex-col">
                    <p class="md:max-w-sm px-10 py-5">My role for this production of Picasso at the Lapin Agile was Co-Composer. This production was designed in a large part by the students. Here are a couple of songs I composed for this play.</p>
                    <span id="player" class="inline-flex flex-col gap-10 flex-grow">
                        <Aplayer :music="{ title: 'Einstein\'s 20th Century', artist: ' ', src: audio1, pic: '../assets/aplayer_bg.png'}" theme='#446f85'/>
                        <Aplayer :music="{ title: 'Einstein\'s Theme', artist: ' ', src: audio2, pic: '../assets/aplayer_bg.png'}" theme='#446f85'/>
                    </span>
                </div>
            </div>
            <div class="md:inline-flex">
                <img class="max-w-md md:max-w-lg" src="../assets/comp_2.jpg" alt="picasso stage view">
                <p class="md:max-w-sm px-10 md:py-12 pt-3"> Drew and I were the two composers for this production. The two of us decided before the first production meeting to split up the work between us. To ensure that the overall composition would make sense, we sent our rough drafts back and forth as to have a clear communication of ideas throughout. Having a two week timeline to compose, this was the most efficient approach.</p>
            </div>
            <div class="md:inline-flex">
                <img class="max-w-md md:max-w-lg" src="../assets/comp_3.jpg" alt="picasso stage view">
                <p class="md:max-w-sm px-10 md:py-20 pt-3"> Tech week is when we made the most critical changes to make it fit with the actions and timings of the production. We worked closely with the Sound Designer to ensure that the music and sound effects meshed well to create a consistent sound. We got feedback from the director </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'
    import src1 from '../../public/Einstein_s_20th_Century.mp3'
    import src2 from '../../public/Einstein_s_Theme.mp3'

    export default {
        name: 'Composition',
        components: {
            Aplayer
        },
        data () {
            return {
                audio1: src1,
                audio2: src2
            }
        }
    }
</script>

<style>
#player {
    transform: scale(0.85);
}
</style>