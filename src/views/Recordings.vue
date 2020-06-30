<template>
    <div class="flex flex-col items-center bg-orange-100 pt-24">
        <h1 id="header" class="text-5xl font-bold tracking-widest uppercase">Recording Projects</h1>
        <div class="flex flex-col items-center w-full">
            <div class="flex flex-col w-full max-w-3xl py-5 gap-4">
                <h1 class="text-left font-semibold text-2xl">Waiting for Sleep</h1>
                <span class="min-w-full px-16 my-8">
                    <Aplayer :music="{ title: 'Waiting for Sleep', artist: 'Chris Wilson', src: audio1 }"/> 
                </span>
                <h2 class="leading-tight">Chris Wilson: Artist, Recording/Mix/Master Engineer, Percussion, Keys, Bass, Guitar, Background Vocals<br>Luke Dixon: Lead Vocals<br>Noah Schumaker: Assistant Engineer<br>David Brown: Assistant Engineer<br>Chase Cloutier: Assistant Engineer</h2>
                <p>This was my entry for the 2018 AES Student Recording Competition in New York. It was recorded and mixed over the course of 2 weeks at the beginning of the 2018 fall semester. This is the first time I have fully expanded and fleshed out an idea of mine and I couldn't be happier. The whole concept for this song revolves around all of the different thoughts that go through your head and keep you awake as you are waiting for sleep. The main piano line you hear in the background is intentionally repetitive, similar to a clock ticking. There was trouble recording in the studio so I used other, more creative ways to record this song; like using a mobil recording rig or using a small interface directly connected to my laptop. I also had a bit of help with some of the bigger recording sessions like drums, alternate percussion, and grand piano. </p>
            </div>
        </div>
        <div class="flex flex-col items-center bg-blue-800 w-full">
            <div class="flex flex-col w-full max-w-3xl py-5 gap-4">
                <h1 class="text-left font-semibold text-2xl text-orange-100">Bad Guy (Waves)</h1>
                <span class="min-w-full px-16 my-8">
                    <Aplayer :music="{ title: 'Bad Guys (Waves) feat. Chris Wilson', artist: 'Jonah G.', src: audio2 }"/> 
                </span>
                <h2 class="text-orange-100 leading-tight">Jonah G: Artist, Lead Vocals, Lyrics<br>Chris Wilson: Producer, Guitar, Keys, Background Vocals<br>Deshaun Tost: Background Vocals</h2>
                <p class="text-orange-100">While in Ohio, a friend of a friend was in town visiting for a few days and saw that I had some recording equipment. So we made a song. He had already made the beat and chord structure so I imported it into a session and we started making the rest of the parts. He and I immediately started bouncing ideas off of each other and when one of us didn't know what to put next, the other person would come up with something that just seemed to fit perfectly. This song was made in 4 days.</p>
            </div>
        </div>
        <div class="flex flex-col items-center w-full">
            <div class="flex flex-col w-full max-w-3xl py-5 gap-4">
                <h1 class="text-left font-semibold text-2xl">Picket Fence</h1>
                <span class="min-w-full px-16 my-8">
                    <Aplayer :music="{ title: 'Picket Fence', artist: 'Zach Duford', src: audio3 }"/> 
                </span>
                <h2 class="leading-tight">Zach Duford: Artist, Vocals, Guitar, Drums, Bass<br>Chris Wilson: Recording/Mix/Master Engineer</h2>
                <p>This song was my final project for a recording class I took at Michigan Tech. Initial recording was completed in one session but we didn't like the sound of the drums so we held another session for that. For the mix, Zach had a few songs in mind that I used as reference but he also told me he wanted it to sound like a garage band. Specifically, he didn't want the vocals too loud, he didn't want super compressed/massive sounding drums, and all the instruments should sound as if you were standing in a garage listening to a band live. He also stressed that having the human element in the instruments was crucial to this song. He didn't want "perfect" takes. So you should be able to hear all of that in the s</p>
            </div>
        </div>
        <div class="flex flex-col items-center bg-blue-800 w-full">
            <div class="flex flex-col w-full max-w-3xl py-5 gap-4">
                <h1 class="text-left font-semibold text-2xl text-orange-100">The Greatest Movie and Video Game Music Concert (2017)</h1>
                <span class="min-w-full px-16 my-8">
                    <Aplayer :music="{ title: 'Star Wars Main Theme', artist: 'Keewenaw Symphony Orchestra', src: audio4 }"/> 
                </span>
                <h2 class="text-orange-100 leading-tight">Joel Neves: Conductor<br>Chris Wilson: Lead Recording Engineer<br>Michael Chopp: Live Mix Engineer<br>Rozsa Crew: Assistant Engineers</h2>
                <p class="text-orange-100">For this concert, I made all the decisions about which mics I would use and where they would be positioned. Helped by a small team, we implemented my design for this concert. The conductor held a couple rehearsals in the space in the week before the concert and wanted me to have a recording of it to hand back to the musicians the day after. On the day of the concert, I mixed the show for the live broadcast while another student was the FOH. I met with the conductor to go over some mixing notes and techniques he wanted. This is the final mastered version of the concert that is within the AES loudness standards.</p>
            </div>
        </div>
        <div class="flex flex-col items-center w-full">
            <div class="flex flex-col w-full max-w-3xl py-5 gap-4">
                <h1 class="text-left font-semibold text-2xl">The Barrow by Ursula K. Leguin</h1>
                <span class="min-w-full px-16 my-8">
                    <Aplayer :music="{ title: 'The Barrow', artist: 'Ursula K. Leguin', src: audio5 }"/> 
                </span>
                <h2 class="leading-tight">Chris Wilson: Co-Sound Designer, Composer<br>Yannik Christianson: Co-Sound Designer<br>Noah Schumaker: Co-Sound Designer</h2>
                <p>This was a group project that we completed during my third year at Michigan Tech. We got into contact with a professional voice actor who was our narrator. For all of the other voices, we contacted people we knew who would fit the parts well. My main role was composer. There were a few points in the drama where music was needed including a song that had the lyrics written for it, but I made the melody. The three of us all took part in the sound design and editing portion of this project.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'
    import src1 from '../../public/Waiting for Sleep Remastered 1.mp3'
    import src2 from '../../public/Bad Guy (Waves) Master Karaoke Version.mp3'
    import src5 from '../../public/The Barrow.mp3'

    export default {
        components: {
            Aplayer
        }, 
        data () {
            return {
                audio1: src1,
                audio2: src2,
                audio5: src5
            }
        }
        
    }
</script>