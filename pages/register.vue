<template>
    <div class="w-full lg:bg-gradient-to-r lg:from-[#DEE1FE] lg:to-white lg:to-50% ">

        <div class="max-w-8xl  mx-auto px-10 sm:py-4 sm:px-20 xl:px-40 ">

            <div class="w-full flex flex-col lg:flex-row py-10 lg:py-32">

                <div class="lg:basis-1/2 pr-0 sm:pr-4">

                    <h2 class="font-bold tracking-tight text-pink text-[40px] leading-[60px]">

                        <template v-if="!state.registered">
                            Entra nella<br>
                            community di<br> Glintzo
                        </template>

                        <template v-else>

                            Benvenuto tra noi,<br> siamo felici di averti a bordo

                        </template>


                    </h2>

                    <p class="mt-6  font-bold text-[20px] leading-[30px] text-dark-blue">

                        <template v-if="!state.registered">
                            Iscriviti e scopri come ottenere Sparkz<br> gratuiti da usare nella piattaforma
                        </template>

                        <template v-else>

                            La tua iscrizione nella community di<br> Glintzo è avvenuta correttamente

                        </template>

                    </p>

                    <p class="text-base mt-4 leading-6 text-dark-blue]">

                        <template v-if="!state.registered">
                            Incontrare e conoscere i visual creator della
                            nostra <br>community non solo è un <span class="font-bold">piacere</span> ma anche una<br>
                            <span class="font-bold">necessità</span> per il nostro lavoro: il tuo
                            feedback per noi è<br> molto importante.<br>
                            Ti chiediamo quindi di indicarci se sei disponibile ad<br> essere contattato da uno dei
                            co-founder
                            di Glintzo e<br> approfondire il funzionamento della piattaforma.
                        </template>

                        <template v-else>

                            Ti abbiamo appena inviato un’<span class="font-bold">email di conferma</span><br>
                            all’indirizzo da te indicato.<br>
                            Provvederemo ad aggiornarti sulla piattaforma quanto prima

                        </template>
                    </p>

                </div>


                <div class="md:basis-1/2 mt-0 sm:mt-10 md:mt-0">

                    <form v-if="!state.registered" action="#" method="POST" class="">
                        <div class="">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <text-field v-model="state.first_name" label="Nome" type="text"
                                        placeholder="Inserisci il tuo nome"></text-field>
                                </div>

                                <div>
                                    <text-field v-model="state.last_name" label="Cognome" type="text"
                                        placeholder="Inserisci il tuo cognome"></text-field>
                                </div>

                                <div>

                                    <text-field v-model="state.email" label="Email" type="email" name="email"
                                        :prepend-icon="mdiEmailOutline" placeholder="Inserisci la tua email"></text-field>

                                </div>

                                <div>

                                    <text-field v-model="state.mobile_phone" label="Cellulare" type="text"
                                        name="phone-number" :prepend-icon="mdiPhone"
                                        placeholder="+39 (555) 987-6543"></text-field>

                                </div>

                                <div>

                                </div>

                                <div class="sm:col-span-2">

                                    <fieldset>

                                        <legend class="text-[14px] font-medium leading-6 text-[#02145A]">Area geografica di
                                            lavoro
                                        </legend>

                                        <div class="mt-4 grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 sm:gap-x-4">


                                            <!-- MILANO -->
                                            <label
                                                class="relative flex flex-col   cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">

                                                <div class="absolute">

                                                    <input type="radio" v-model="state.milano" class="sr-only"
                                                        @click="state.milano = !state.milano">

                                                    <lazy-svg-check class="h-5 w-5 text-[#02145A] "
                                                        :class="state.milano ? '' : 'invisible'"></lazy-svg-check>

                                                </div>

                                                <div class="flex flex-col">

                                                    <div class="text-center">

                                                        <lazy-svg-milano class="w-[80px] h-[80px] inline"></lazy-svg-milano>

                                                    </div>

                                                    <span
                                                        class="block text-sm font-normal text-[14px] text-[#02145A] text-center">Milano</span>

                                                </div>

                                                <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                    aria-hidden="true"></span>

                                            </label>


                                            <!-- ROMA -->
                                            <label
                                                class="relative flex flex-col   cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">

                                                <div class="absolute">

                                                    <input type="radio" v-model="state.roma" class="sr-only"
                                                        @click="state.roma = !state.roma">

                                                    <lazy-svg-check class="h-5 w-5 text-[#02145A] "
                                                        :class="state.roma ? '' : 'invisible'"></lazy-svg-check>

                                                </div>

                                                <div class="flex flex-col">

                                                    <div class="text-center">

                                                        <lazy-svg-roma class="w-[80px] h-[80px] inline"></lazy-svg-roma>

                                                    </div>

                                                    <span
                                                        class="block text-sm font-normal text-[14px] text-[#02145A] text-center">Roma</span>

                                                </div>

                                                <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                    aria-hidden="true"></span>

                                            </label>


                                            <!-- TORINO -->
                                            <label
                                                class="relative flex flex-col   cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">

                                                <div class="absolute">

                                                    <input type="radio" v-model="state.torino" class="sr-only"
                                                        @click="state.torino = !state.torino">

                                                    <lazy-svg-check class="h-5 w-5 text-[#02145A] "
                                                        :class="state.torino ? '' : 'invisible'"></lazy-svg-check>

                                                </div>

                                                <div class="flex flex-col">

                                                    <div class="text-center">

                                                        <lazy-svg-torino class="w-[80px] h-[80px] inline"></lazy-svg-torino>

                                                    </div>

                                                    <span
                                                        class="block text-sm font-normal text-[14px] text-[#02145A] text-center">Torino</span>

                                                </div>

                                                <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                    aria-hidden="true"></span>

                                            </label>









                                        </div>
                                    </fieldset>
                                </div>


                                <div class="sm:col-span-2">

                                    <fieldset>

                                        <legend class="text-[14px] font-medium leading-6 text-[#02145A]">Visual creator
                                        </legend>

                                        <div class="mt-4 grid  gap-y-6 grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-4">

                                            <!-- FOTOGRAFO -->
                                            <label
                                                class="relative flex flex-col   cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">

                                                <div class="absolute">

                                                    <input type="radio" v-model="state.fotografo" class="sr-only"
                                                        @click="state.fotografo = !state.fotografo">

                                                    <lazy-svg-check class="h-5 w-5 text-[#02145A] "
                                                        :class="state.fotografo ? '' : 'invisible'"></lazy-svg-check>

                                                </div>

                                                <div class="flex flex-col">

                                                    <div class="text-center">

                                                        <lazy-svg-fotografia
                                                            class="w-[80px] h-[80px] inline"></lazy-svg-fotografia>

                                                    </div>

                                                    <span
                                                        class="block text-sm font-normal text-[14px] text-[#02145A] text-center">Fotografo</span>

                                                </div>

                                                <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                    aria-hidden="true"></span>

                                            </label>


                                            <!-- VIDEOMAKER -->
                                            <label
                                                class="relative flex flex-col   cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">

                                                <div class="absolute">

                                                    <input type="radio" v-model="state.videomaker" class="sr-only"
                                                        @click="state.videomaker = !state.videomaker">

                                                    <lazy-svg-check class="h-5 w-5 text-[#02145A] "
                                                        :class="state.videomaker ? '' : 'invisible'"></lazy-svg-check>

                                                </div>

                                                <div class="flex flex-col">

                                                    <div class="text-center">

                                                        <lazy-svg-videocamera
                                                            class="w-[80px] h-[80px] inline"></lazy-svg-videocamera>

                                                    </div>

                                                    <span
                                                        class="block text-sm font-normal text-[14px] text-[#02145A] text-center">Videomaker</span>

                                                </div>

                                                <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                    aria-hidden="true"></span>

                                            </label>


                                        </div>
                                    </fieldset>
                                </div>


                                <div class="sm:col-span-2">


                                    <div>
                                        <label class="text-[14px] font-medium leading-6 text-[#02145A]">Svolgo questa
                                            attività
                                            perchè</label>

                                        <fieldset class="mt-4">

                                            <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                                <div class="flex items-center">
                                                    <input value="business" name="userType" type="radio"
                                                        v-model="state.userType"
                                                        class="h-4 w-4 border-[#02145A]  text-[#02145A]">
                                                    <label class="ml-3 block text-[14px] font-normal text-[#02145A]">É la
                                                        mia
                                                        professione</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input value="personal" name="userType" type="radio"
                                                        v-model="state.userType"
                                                        class="h-4 w-4 border-[#02145A]  text-[#02145A]">
                                                    <label class="ml-3 block text-[14px] font-normal text-[#02145A]">É il
                                                        mio
                                                        hobby</label>
                                                </div>

                                            </div>
                                        </fieldset>
                                    </div>


                                </div>

                                <div class="sm:col-span-2">


                                    <div>
                                        <label class="text-[14px] font-medium leading-6 text-[#02145A]">Sono disponibile per
                                            una
                                            call</label>

                                        <fieldset class="mt-4">

                                            <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                                <div class="flex items-center">
                                                    <input value="si" name="call" type="radio" v-model="state.call"
                                                        class="h-4 w-4 border-[#02145A]  text-[#02145A]">
                                                    <label
                                                        class="ml-3 block  text-[14px] font-normal text-[#02145A]">Si</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input value="no" name="call" type="radio" v-model="state.call"
                                                        class="h-4 w-4 border-[#02145A] text-[#02145A]">
                                                    <label
                                                        class="ml-3 block text-[14px] font-normal text-[#02145A]">No</label>
                                                </div>

                                            </div>
                                        </fieldset>
                                    </div>


                                </div>
                            </div>
                            <div class="mt-8 flex justify-start">

                                <btn bg-color="bg-[#1E16FE] w-[100px]" @click="register">Invia</btn>

                            </div>
                        </div>
                    </form>

                    <div class="flex items-center h-full justify-center" v-else>

                        <h1 class="text-5xl text-pink text-center">HELLO</h1>

                        <img src="~/assets/images/hello.png" />

                    </div>

                </div>


            </div>


        </div>

    </div>
</template>

<script setup>

import { mdiPhone } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';


definePageMeta({

    layout: "landing",

});

/**
 * 
 */
const title = useState('title');


const state = reactive({

    /**
     * 
     */
    userType: '',

    first_name: '',
    last_name: '',
    /**
     * 
     */
    email: '',
    mobile_phone: '',
    password: '',
    password_confirm: '',

    /**
     * 
     */
    milano: false,
    torino: false,
    roma: false,

    /**
     * 
     */
    fotografo: false,
    videomaker: false,

    /**
     * 
     */
    call: '',

    /**
     * 
     */
    registered: false,

});

const { $apiFetch } = useNuxtApp();

/**
 * 
 */
function csrf() {
    return $apiFetch('/sanctum/csrf-cookie')
}


/**
 * 
 */
async function register() {

    await csrf();

    try {

        const lead = await $apiFetch('/api/leads/register', {

            method: 'POST',

            body: {

                type: state.userType,
                first_name: state.first_name,
                last_name: state.last_name,
                email: state.email,
                mobile_phone: state.mobile_phone,
            }
        });


        state.registered = true;

    } catch (error) {

        console.log(error);

    }


}




</script>