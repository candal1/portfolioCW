<template>
    <div class="bg-blue-900 border-b">
        <div class="flex py-32 justify-center">
            <img class="max-w-lg w-full h-auto" src="..\assets\contact_chris.jpg" alt="Chris sitting at sound bourd">
            <form class="px-5 text-white max-w-xl w-full">
                <h1 class="text-4xl font-bold tracking-widest">Contact</h1>
                <p class="max-w-xs py-12">Let me know if there is anything I can do for you. I'll get back with you within 1 business day.</p>
                <input class="bg-blue-900 border-4 border-white appearance-none py-2 px-3 my-2 w-full" type="text" placeholder="Name *">
                <input class="bg-blue-900 border-4 border-white appearance-none py-2 px-3 my-2 w-full" type="text" placeholder="Email *">
                <input class="bg-blue-900 border-4 border-white appearance-none py-2 px-3 my-2 w-full" type="text" placeholder="Subject">
                <textarea class="bg-blue-900 border-4 border-white appearance-none w-full my-2 p-2" cols="55" rows="6" placeholder="Message"> </textarea>
                <button class="inine-flex bg-orange-100 p-5 text-black h-10 w-32 items-">Submit</button>
            </form>

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>