<template>
    <div class="bg-blue-900 border-b">
        <div class="md:flex py-32 justify-center items-center">
            <img class="max-w-sm md:max-w-lg flex-shrink ml-4 md:ml-0" src="..\assets\contact_chris.jpg" alt="Chris sitting at sound bourd">
            <form id="form" class="px-5 py-5 md:py-0 text-white max-w-xl w-full" @submit.prevent="sendEmail">
                <h1 id="header" class="text-4xl font-bold tracking-widest">Contact</h1>
                <p class="max-w-xs py-12">Let me know if there is anything I can do for you. I'll get back with you within 1 business day.</p>
                <input required class="bg-blue-900 border-4 border-white appearance-none py-2 px-3 my-2 w-full" type="text" placeholder="Name *" name="name">
                <input required class="bg-blue-900 border-4 border-white appearance-none py-2 px-3 my-2 w-full" type="email" placeholder="Email *" name="email">
                <input class="bg-blue-900 border-4 border-white appearance-none py-2 px-3 my-2 w-full" type="text" placeholder="Subject" name="subject" >
                <textarea class="bg-blue-900 border-4 border-white appearance-none w-full my-2 p-2" cols="55" rows="6" placeholder="Message" name="message"></textarea> 
                <div class="md:flex items-center justify-between">
                    <button type="submit" class="bg-orange-100 text-black h-10 w-32 hover:bg-blue-800 hover:text-orange-100">Submit</button>
                    <p v-if="sent">Email Sent succesfully...thank you for your interest</p>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
    import emailjs from 'emailjs-com'

    export default {
        data() {
            return {
                sent: false,
            }
        },
        created() {
            this.sent = false;
        },
        methods: {
            sendEmail (e) {
                emailjs.sendForm('gmail', 'contact', e.target, 'user_XhqAUMxtEMUeQXIebmg7x')
                    .then((result) => {  
                        console.log('SUCCESS!', result.status, result.text);
                        document.getElementById("form").reset();
                        this.sent= true;
                    }, (error) => {
                        console.log('FAILED...', error);
                    });}
        },
        
    }
</script>