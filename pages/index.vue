<template>
    <div class="mx-10 sm:mx-20 py-10">

        <Title>{{ title }}</Title>


        <div class="flex flex-col space-y-10">

            <div>
                <h1 class="text-4xl font-bold">Prova gratuitamente Glintzo e fai brillare il tuo business</h1>
            </div>


            <div class="flex flex-col space-y-2">

                <h2 class="font-bold text-xl uppercase">Informazioni di contatto</h2>

                <h3 class="font-normal">Qualche info su di te per sapere chi sei e quali sono le tue competenze</h3>

            </div>


            <ul v-if="errors.length > 0 ">
            
                <li :key="index" v-for="(error, index)  in errors"> {{  error }}</li>

            </ul>

            <div class="flex flex-row">

                <div class="w-1/2 text-center  py-3  rounded" :class="{ 'border-b-primary border-b-4 ': state.userType == 'business' }">

                    <span @click="setType('business')" class="cursor-pointer"  :class="{ 'font-bold': state.userType == 'business' }">E' il mio lavoro</span>

                </div>

                <div class="w-1/2 text-center py-3  rounded"  :class="{ 'border-b-primary border-b-4': state.userType == 'personal' }">

                    <span @click="setType('personal')" class="cursor-pointer" :class="{ 'font-bold': state.userType == 'personal' }">E' il mio Hobby</span>

                </div>

            </div>

            <div>

                <div v-if="state.userType == 'business'" class="grid gap-6 mb-6">

                    <div>

                        <text-field v-model="state.business_name" label="Ragione sociale" type="text" name="ragione_sociale"></text-field>

                    </div>

                </div>


                <div class="grid gap-6 mb-6 md:grid-cols-2">

                    <div v-if="state.userType == 'personal'">

                        <text-field v-model="state.first_name" label="Nome" type="text"></text-field>

                    </div>

                    <div v-if="state.userType == 'personal'">

                        <text-field v-model="state.last_name" label="Cognome" type="text"></text-field>

                    </div>

                    <div>

                        <text-field v-model="state.fiscal_code" :label="state.userType == 'business' ? 'Codice Fiscale/Partiva IVA' : 'Codice Fiscale'" type="text" name="codice_fiscale"></text-field>

                    </div>

                    <div>

                        <text-field v-model="state.city" label="Città" type="text"></text-field>

                    </div>

                    <div>

                        <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Competenza</label>

                        <select id="location" v-model="state.competenza" name="location" aria-placeholder="Secgli"
                            class="mt-2 block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
                            <option value="" selected hidden>Seleziona</option>
                            <option value="Foto">Foto</option>
                            <option value="Video">Video/Animazione</option>

                        </select>
                    </div>

                </div>

                <p v-if="state.competenza != ''" class="my-6">Scegli di seguito le tue <span class="font-medium">specializzazioni</span> rispetto alla competenza che hai selezionato. </p>

                <div class="grid gap-6 mb-6 md:grid-cols-2" v-if="state.competenza != ''">

                    <fieldset>

                        <div class="space-y-5">

                            <div class="relative flex items-start">
                                <div class="flex h-6 items-center">
                                    <input id="comments" aria-describedby="comments-description" name="comments"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                </div>
                                <div class="ml-2 text-sm leading-6">
                                    <label>Lorem ipsum {{ state.competenza }}</label>
                                </div>
                            </div>

                            <div class="relative flex items-start">
                                <div class="flex h-6 items-center">
                                    <input id="comments" aria-describedby="comments-description" name="comments"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                </div>
                                <div class="ml-2 text-sm leading-6">
                                    <label>Lorem ipsum {{ state.competenza }}</label>
                                </div>
                            </div>

                            <div class="relative flex items-start">
                                <div class="flex h-6 items-center">
                                    <input id="comments" aria-describedby="comments-description" name="comments"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                </div>
                                <div class="ml-2 text-sm leading-6">
                                    <label>Lorem ipsum {{ state.competenza }}</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

            </div>


            <div>
                <hr>
            </div>

            <div class="flex flex-col space-y-2">

                <h2 class="font-bold text-xl uppercase">Informazioni di accesso</h2>

                <h3 class="font-normal">I recapiti e la password per verificare la tua identità</h3>

            </div>

            <div>

                <form>

                    <div class="grid gap-6 mb-6 md:grid-cols-2">

                        <div>

                            <text-field v-model="state.email" label="Email" type="email" name="email"></text-field>

                        </div>


                        <div>
                            <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">Cellulare</label>

                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="absolute inset-y-0 left-0 flex items-center">
                                    <label for="country" class="sr-only">Country</label>
                                    <select id="country" name="country" autocomplete="country"
                                        class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                        <option>IT</option>
                                    </select>
                                </div>
                                <input type="text" name="phone-number" id="phone-number"
                                    class="block w-full rounded-md border-0 py-1.5 pl-16  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="+1 (555) 987-6543" />
                            </div>

                        </div>

                        <div>

                            <text-field v-model="state.password" label="Password" type="password" name="password"></text-field>

                        </div>

                        <div>

                            <text-field v-model="state.password_confirm" label="Conferma password" type="password" name="confirm_password"></text-field>

                        </div>

                    </div>

                </form>

                
                <div class="flex items-center">

                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded">

                    <label for="link-checkbox" class="ml-2 text-sm">Accetto le <NuxtLink class="underline text-primary"
                            to="/login">condizioni d'uso</NuxtLink> e la <NuxtLink class="underline text-primary"
                            to="/my-info">politica sulla privacy</NuxtLink> di Glintzo</label>
                </div>

            </div>

            <div class="mt-5">
                <button type="button" @click="registerUser" :disable="isLoading"
                    class="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Crea
                    il tuo account</button>
            </div>

        </div>

    </div>
</template>

<script setup>
import { remove } from '@vue/shared';
import { reactive } from 'vue';



const laravel = await useNuxtApp().$apiFetch('/'); 


/**
 * 
 */
const title = useState('title');

/**
 * 
 */
const state = reactive({
    /**
     * 
     */
    userType: 'business',
    /**
     * 
     */
    competenza: '',
    first_name: '',
    last_name: '',
    business_name: '',
    fiscal_code: '',
    city: '',
    /**
     * 
     */
    email: '',
    mobile_phone: '',
    password: '',
    password_confirm: ''
});

const isLoading = ref(false)
const errors    = ref([]);


/**
 * 
 */
function setType(type) {
    state.userType = type;
}


/**
 * 
 */
async function registerUser(){

    await csrf();

    try {

        isLoading.value = true;

        const post = await useNuxtApp().$apiFetch('/register', {

            method: 'POST',

            body : {
                type: state.userType,
                business_name: state.business_name,
                first_name: state.first_name,
                last_name : state.last_name,
                fiscal_code: state.fiscal_code,
                email: state.email, 
                password: state.passoword, 
                password_confirmation: state.password_confirm
                
            }
        });

        isLoading.value = false;

    }catch(error){

        console.log(error.data);

        errors.value = Object.values(error.data.errors).flat();

        isLoading.value = false;
    }

}


/**
 * 
 */
function csrf(){

    return useNuxtApp().$apiFetch('/sanctum/csrf-cookie');

}


/**
 * 
 */
async function login(){

    await csrf();

    try{

        await useNuxtApp().$apiFetch('/login', {

            method: 'POST',

            body : {
                email: state.email,
            }

        });


        const user = await useNuxtApp().$apiFetch('/api/user');

        const { setUser } = useAuth();

        setUser(user.first_name);

    }catch(error){

    }
}

/**
 *  
 */
async function logout(){

    try {

        await useNuxtApp().$apiFetch('/logout', {
            method: 'POST'
        });

        


    }catch(error){

    }finally{

        const { removeUser } = useAuth();

        removeUser();

        window.location.pathname = '/';
    }

}

</script>