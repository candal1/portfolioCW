<template>
  <div id="main" class="flex flex-col items-center overflow-hidden">
      <div class="flex flex-col text-right py-32 md:py-64 w-full max-w-5xl text-orange-100 px-5">
        <h1 id="headerMain" class="font-extrabold uppercase leading-none">Chris<br>Wilson</h1>
        <h2 id="headerSec" >Audio Engineer, Musician,<br>Composer, Sound Designer</h2>
      </div>
      <div id="about" class="inline-flex flex-col text-center items-center bg-orange-100 w-full gap-8 py-10 px-2">
        <h1 id="header" class="text-3xl">ABOUT</h1>
        <img id="pic" class="rounded-full max-w-sm md:max-w-md h-auto" src="../assets/cw_home_circle.jpg" alt="chris, portrait">
        <p class="max-w-3xl text-xl md:text-base">Ever since a young age, I've been interested in music. It all started from learning piano and this is where I started developing an ear for music. There's a different perspective that musicians bring to the audio engineering world because of the different ways they relate sound to music. This is what I learned after going through the Sound Design program at Michigan Tech. I genuinely enjoy making music sound the best it can, whether that's playing an instrument or "playing" a mixing board. But all music does not necessarily imply instruments or mixing. Music can be the ebbs and flows of a dramatic theater production or a short film. It can be the laughter of an audience after a well-timed joke from a comedian or the wonder and awe of a child after witnessing a spectacular performance from an entertainer. All of it, I consider to be music and all of it is my passion.<br><span class="leading-loose">Welcome to my website.</span></p>
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

#headerMain {
  letter-spacing: 0.2em;
  font-size: 4.8em;
  font-family: 'Montserrat';
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

#headerSec {
  font-weight: 400;
  font-size: 2.5em;
  font-family: 'Playfair Display';
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

</style>

