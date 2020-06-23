<template>
  <div id="main" class="grid justify-center max-w-full">
    <div class="text-right text-white py-32 mx-20 my-5 max-w-4xl">
      <h1 class="text-6xl font-bold tracking-widest">Chris<br>Wilson</h1>
      <h2 class="">Audio Engineer, Musician,<br>Composer, Sound Designer</h2>
    </div>
    <div class="flex bg-orange-100 rounded-lg border-black shadow-lg mx-20 mb-32">
      <div id="about" class="inline-grid text-center items-center gap-10 p-10">
        <h1 class="font-bold text-3xl tracking-widest">ABOUT</h1>
        <img class="rounded-full" width="350" src="../assets/cw_home_circle.jpg" alt="chris, portrait">
        <p class="max-w-3xl">Ever since a young age, I've been interested in music. It all started from learning piano and this is where I started developing an ear for music. There's a different perspective that musicians bring to the audio engineering world because of the different ways they relate sound to music. This is what I learned after going through the Sound Design program at Michigan Tech. I genuinely enjoy making music sound the best it can, whether that's playing an instrument or "playing" a mixing board. But all music does not necessarily imply instruments or mixing. Music can be the ebbs and flows of a dramatic theater production or a short film. It can be the laughter of an audience after a well-timed joke from a comedian or the wonder and awe of a child after witnessing a spectacular performance from an entertainer. All of it, I consider to be music and all of it is my passion.<br><span class="leading-loose">Welcome to my website.</span></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>

#main {
  background-image: url("../assets/cw_home_bg.jpg");  
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

#about {
  justify-items: center;
}

</style>

