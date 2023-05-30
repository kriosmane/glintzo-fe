<template>
    <div class="w-full" style="background-image: linear-gradient(to right, #DEE1FE 0.05%, rgba(222, 225, 254, 0) 50%);">
        <div class="relative isolate">
            <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 ">
                <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

                        <h2 class="font-bold tracking-tight text-[#FB2283] text-[40px] leading-[60px]">Entra nella<br>
                            community di<br> Glintzo
                        </h2>
                        <p class="mt-6  font-bold text-[20px] leading-[30px] text-[#02145A]">
                            Iscriviti e scopri come ottenere Sparkz<br> gratuiti da usare nella piattaforma
                        </p>
                        <p class="text-base mt-4 leading-6 text-[#02145A]">Incontrare e conoscere i visual creator della
                            nostra <br>community non solo è un <span class="font-bold">piacere</span> ma anche una<br> <span
                                class="font-bold">necessità</span> per il nostro lavoro: il tuo
                            feedback per noi è<br> molto importante.<br>
                            Ti chiediamo quindi di indicarci se sei disponibile ad<br> essere contattato da uno dei
                            co-founder
                            di Glintzo e<br> approfondire il funzionamento della piattaforma.
                        </p>

                    </div>
                </div>
                <form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <text-field v-model="state.first_name" label="Nome" type="text"></text-field>
                            </div>

                            <div>
                                <text-field v-model="state.last_name" label="Cognome" type="text"></text-field>
                            </div>

                            <div>

                                <text-field v-model="state.email" label="Email" type="email" name="email"
                                    :prepend-icon="mdiEmailOutline"></text-field>

                            </div>

                            <div>

                                <text-field v-model="state.mobile_phone" label="Cellulare" type="text" name="phone-number"
                                    :prepend-icon="mdiPhone" placeholder="+39 (555) 987-6543"></text-field>

                            </div>

                            <div>

                            </div>

                            <div class="sm:col-span-2">

                                <fieldset>

                                    <legend class="text-base font-semibold leading-6 text-gray-900">Area geografica di
                                        lavoro
                                    </legend>

                                    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">

                                        <!-- MILANO -->
                                        <label
                                            class="relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">
                                            <input type="radio" v-model="state.milano" class="sr-only"
                                                @click="state.milano = !state.milano">

                                            <svg class="h-5 w-5 text-blue-600 " :class="state.milano ? '' : 'invisible'"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span class="flex flex-1">

                                                <span class="flex flex-col">

                                                    <lazy-svg-milano></lazy-svg-milano>
                                                    <span class="block text-sm font-medium text-[#02145A] text-center">Milano</span>
                                                </span>
                                            </span>





                                            <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                aria-hidden="true"></span>
                                        </label>

                                        <!-- TORINO -->
                                        <label
                                            class="relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">
                                            <input type="radio" v-model="state.torino" class="sr-only"
                                                @click="state.torino = !state.torino">
                                            <span class="flex flex-1">
                                                <span class="flex flex-col">
                                                    <span id="project-type-0-label"
                                                        class="block text-sm font-medium text-gray-900">Torino</span>
                                                </span>
                                            </span>

                                            <svg class="h-5 w-5 text-blue-600 " :class="state.torino ? '' : 'invisible'"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                aria-hidden="true"></span>
                                        </label>

                                        <!-- ROMA -->
                                        <label
                                            class="relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">
                                            <input type="radio" v-model="state.roma" class="sr-only"
                                                @click="state.roma = !state.roma">
                                            <span class="flex flex-1">
                                                <span class="flex flex-col">
                                                    <span id="project-type-0-label"
                                                        class="block text-sm font-medium text-gray-900">Roma</span>
                                                </span>
                                            </span>

                                            <svg class="h-5 w-5 text-blue-600 " :class="state.roma ? '' : 'invisible'"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                aria-hidden="true"></span>
                                        </label>

                                    </div>
                                </fieldset>
                            </div>


                            <div class="sm:col-span-2">

                                <fieldset>

                                    <legend class="text-base font-semibold leading-6 text-gray-900">Visual creator</legend>

                                    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">

                                        <!-- FOTOGRAFO -->
                                        <label
                                            class="relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">
                                            <input type="radio" v-model="state.fotografo" class="sr-only"
                                                @click="state.fotografo = !state.fotografo">
                                            <span class="flex flex-1">
                                                <span class="flex flex-col">
                                                    <span id="project-type-0-label"
                                                        class="block text-sm font-medium text-gray-900">Fotografo</span>
                                                </span>
                                            </span>

                                            <svg class="h-5 w-5 text-blue-600 " :class="state.fotografo ? '' : 'invisible'"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                aria-hidden="true"></span>
                                        </label>

                                        <!-- VIDEOMAKER -->
                                        <label
                                            class="relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">
                                            <input type="radio" v-model="state.videomaker" class="sr-only"
                                                @click="state.videomaker = !state.videomaker">
                                            <span class="flex flex-1">
                                                <span class="flex flex-col">
                                                    <span id="project-type-0-label"
                                                        class="block text-sm font-medium text-gray-900">Videomaker</span>
                                                </span>
                                            </span>

                                            <svg class="h-5 w-5 text-blue-600 " :class="state.videomaker ? '' : 'invisible'"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span class="pointer-events-none absolute -inset-px rounded-lg border"
                                                aria-hidden="true"></span>
                                        </label>



                                    </div>
                                </fieldset>
                            </div>


                            <div class="sm:col-span-2">


                                <div>
                                    <label class="text-base font-semibold text-gray-900">Svolgo questa attività
                                        perchè</label>

                                    <fieldset class="mt-4">

                                        <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                            <div class="flex items-center">
                                                <input value="business" name="userType" type="radio"
                                                    v-model="state.userType"
                                                    class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600">
                                                <label class="ml-3 block text-xs font-normal leading-6 text-gray-900">É la
                                                    mia
                                                    professione</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input value="personal" name="userType" type="radio"
                                                    v-model="state.userType"
                                                    class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600">
                                                <label class="ml-3 block text-xs font-normal leading-6 text-gray-900">É il
                                                    mio
                                                    hobby</label>
                                            </div>

                                        </div>
                                    </fieldset>
                                </div>


                            </div>

                            <div class="sm:col-span-2">


                                <div>
                                    <label class="text-base font-semibold text-gray-900">Sono disponibile per una
                                        call</label>

                                    <fieldset class="mt-4">

                                        <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                            <div class="flex items-center">
                                                <input value="si" name="call" type="radio" v-model="state.call"
                                                    class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600">
                                                <label
                                                    class="ml-3 block text-xs font-normal leading-6 text-gray-900">Si</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input value="no" name="call" type="radio" v-model="state.call"
                                                    class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600">
                                                <label
                                                    class="ml-3 block text-xs font-normal leading-6 text-gray-900">No</label>
                                            </div>

                                        </div>
                                    </fieldset>
                                </div>


                            </div>
                        </div>
                        <div class="mt-8 flex justify-start">

                            <btn @click="register">Invia</btn>

                        </div>
                    </div>
                </form>
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
    call: ''

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


        alert('Lead inserted');

    } catch (error) {

        console.log(error);

    }


}




</script>