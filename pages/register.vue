<style>
label.city.active .border-2 {
  border-color: #9C9BEC;
}


[type='radio']:checked {
  background-image: url("assets/images/radio_selected.png");
}
</style>
<template>
  <div class="w-full h-full min-h-screen  ">
    <div class="max-w-8xl mx-auto px-10 sm:py-4 sm:px-20 xl:px-40">
      <div class="w-full flex flex-col lg:flex-row py-10 md:py-10 2xl:py-32 relative">
        <div
          class="lg:basis-1/2 pr-0 sm:pr-4 lg:h-screen lg:flex lg:items-center lg:sticky  lg:top-0 lg:mt-[-130px] 2xl:mt-[-228px]">
          <div class="lg:relative">
            <h2
              class="text-[35px] leading-[normal] font-gopher   font-bold tracking-tight text-primary sm:text-[56px] sm:leading-[53px]">
              <template v-if="!state.registered">
                Entra nella<br />
                community di<br />
                Glintzo
              </template>

              <template v-else>
                Benvenuto tra noi,<br />
                siamo felici di averti a bordo
              </template>
            </h2>

            <p class="mt-6 font-bold text-[20px] leading-[25px] text-black">
              <template v-if="!state.registered">
                Iscriviti e scopri come ottenere Sparkz<br />
                gratuiti da usare nella piattaforma
              </template>

              <template v-else>
                La tua iscrizione nella community di<br />
                Glintzo è avvenuta correttamente
              </template>
            </p>

            <p class="text-base mt-4 leading-6 text-black">
              <template v-if="!state.registered">
                Incontrare e conoscere i visual creator della nostra <br />community non
                solo è un <span class="font-bold">piacere</span> ma anche una<br />
                <span class="font-bold">necessità</span> per il nostro lavoro: il tuo
                feedback per noi è<br />
                molto importante.<br />
                Ti chiediamo quindi di indicarci se sei disponibile ad<br />
                essere contattato da uno dei co-founder di Glintzo e<br />
                approfondire il funzionamento della piattaforma.
              </template>

              <template v-else>
                Ti abbiamo appena inviato un’ <span class="font-bold">email di conferma</span><br />
                all’indirizzo da te indicato.<br />
                Provvederemo ad aggiornarti sulla piattaforma quanto prima
              </template>
            </p>
          </div>
        </div>

        <div class="md:basis-1/2 mt-6 sm:mt-10 md:mt-0">
          <form v-if="!state.registered" id="form" ref="form" action="#" method="POST"
            class="lg:max-h-[70vh] overflow-auto no-scrollbar lg:px-8">
            <div class="">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <text-field :validator="v$.first_name" v-model="state.first_name" label="Nome" type="text"
                    placeholder="Inserisci il tuo nome"></text-field>
                </div>

                <div>
                  <text-field :validator="v$.last_name" v-model="state.last_name" label="Cognome" type="text"
                    placeholder="Inserisci il tuo cognome"></text-field>
                </div>

                <div>
                  <text-field :validator="v$.email" v-model="state.email" label="Email" type="email" name="email"
                    :prepend-icon="mdiEmailOutline" placeholder="Inserisci la tua email"></text-field>
                </div>

                <div>
                  <text-field :validator="v$.mobile_phone" v-model="state.mobile_phone" label="Cellulare" type="text"
                    name="phone-number" :prepend-icon="mdiPhone" placeholder="+39 (555) 987-6543"></text-field>
                </div>

                <div hidden lg:flex></div>

                <div class="sm:col-span-2">
                  <fieldset>
                    <legend class="text-[14px] font-medium leading-6 text-black">
                      Area geografica di lavoro
                    </legend>

                    <div class="mt-4 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-5">
                      <!-- MILANO -->
                      <label-card v-model="state.milano" title="Milano"
                        :class="state.milano ? 'city active  mx-1' : 'city mx-1'">
                        <lazy-svg-milano class="w-[80px] h-[80px] inline  "></lazy-svg-milano>
                      </label-card>

                      <!-- ROMA -->
                      <label-card v-model="state.roma" title="Roma"
                        :class="state.roma ? 'city active mx-1' : 'city mx-1'">
                        <lazy-svg-roma class="w-[80px] h-[80px] inline "></lazy-svg-roma>
                      </label-card>

                      <!-- TORINO -->
                      <label-card v-model="state.torino" title="Torino"
                        :class="state.torino ? 'city active mx-1' : 'city mx-1'">
                        <lazy-svg-torino class="w-[80px] h-[80px] inline"></lazy-svg-torino>
                      </label-card>
                    </div>
                  </fieldset>

                  <span class="text-xs text-red-500" const submitClicked=ref(false)
                    v-if="state.milano == false && state.roma == false && state.torino == false && submitClicked == true">Scegli
                    un area geografica</span>
                </div>

                <div class="sm:col-span-2">
                  <fieldset>
                    <legend class="text-[14px] font-medium leading-6 text-black">
                      Visual creator
                    </legend>

                    <div class="mt-4 grid gap-y-6 grid-cols-2 sm:grid-cols-3 gap-x-3 sm:gap-x-5">
                      <!-- FOTOGRAFO -->
                      <label-card v-model="state.fotografo" title="Fotografo"
                        :class="state.fotografo ? 'city active mx-1' : 'city mx-1'">
                        <lazy-svg-fotografia class="w-[80px] h-[80px] inline"></lazy-svg-fotografia>
                      </label-card>

                      <!-- VIDEOMAKER -->
                      <label-card v-model="state.videomaker" title="Videomaker"
                        :class="state.videomaker ? 'city active mx-1' : 'city mx-1'">
                        <lazy-svg-videocamera class="w-[80px] h-[80px] inline"></lazy-svg-videocamera>
                      </label-card>
                    </div>
                    <span class="text-xs text-red-500" const submitClicked=ref(false)
                      v-if="state.fotografo == false && state.videomaker == false && submitClicked == true">Che tipo
                      di
                      creator sei?</span>
                  </fieldset>
                </div>

                <div class="sm:col-span-2">
                  <div>
                    <label class="text-[14px] font-medium leading-6 text-black">Svolgo questa attività perchè</label>

                    <fieldset class="mt-4">
                      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        <div class="flex items-center">
                          <input value="business" name="userType" type="radio" v-model="state.userType"
                            @change="v$.userType.$touch" class="h-4 w-4 focus:ring-0 focus:ring-offset-0 " />
                          <label class="ml-3 block text-[14px] font-normal text-black">É la mia professione</label>
                        </div>
                        <div class="flex items-center">
                          <input value="personal" name="userType" type="radio" v-model="state.userType"
                            @change="v$.userType.$touch" class="h-4 w-4 focus:ring-0 focus:ring-offset-0" />
                          <label class=" ml-3 block text-[14px] font-normal text-black">É il mio hobby</label>
                        </div>
                      </div>
                    </fieldset>
                    <span class="text-xs text-red-500" v-if="v$.userType.$error">
                      {{ v$.userType.$errors[0].$message }}</span>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div>
                    <label class="text-[14px] font-medium leading-6 text-black">Sono disponibile per una call</label>

                    <fieldset class="mt-4">
                      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        <div class="flex items-center">
                          <input value="si" name="call" type="radio" v-model="state.call" @change="v$.call.$touch"
                            class="h-4 w-4 focus:ring-0 focus:ring-offset-0" />
                          <label class="ml-3 block text-[14px] font-normal text-black">Si</label>
                        </div>
                        <div class="flex items-center">
                          <input value="no" name="call" type="radio" v-model="state.call" @change="v$.call.$touch"
                            class="h-4 w-4  focus:ring-0 focus:ring-offset-0" />
                          <label class="ml-3 block text-[14px] font-normal text-black">No</label>
                        </div>
                      </div>
                      <span class="text-xs text-red-500" v-if="v$.call.$error">{{
                        v$.call.$errors[0].$message
                      }}</span>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-start">
                <btn :disabled="buttonDisabled" bg-color="bg-lime" class="w-[100px]" color="black" @click="register">Invia
                </btn>
              </div>

            </div>

            <div class="rounded-md bg-red-50 p-4 mt-4" v-if="errorMessage.length > 0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-red-800">{{ errorMessage }}</h3>

                </div>
              </div>
            </div>
          </form>

          <div class="flex items-center h-full justify-center" v-else>

            <img src="~/assets/images/hello_white.png" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mdiPhone } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";


import { required, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';


definePageMeta({
  layout: "landing",
});

/**
 *
 */
const title = useState("title");

const state = reactive({
  /**
   *
   */
  userType: "",

  first_name: "",
  last_name: "",
  /**
   *
   */
  email: "",
  mobile_phone: "",
  password: "",
  password_confirm: "",

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
  call: "",

  /**
   *
   */
  registered: false,
});

const { $apiFetch } = useNuxtApp();



const rules = computed(() => {
  return {
    first_name: {
      required: helpers.withMessage('Campo obbligatorio', required),
    },
    last_name: {
      required: helpers.withMessage('Campo obbligatorio', required),
    },

    email: {
      required: helpers.withMessage('Campo obbligatorio', required),
      email: helpers.withMessage('Email non valida', email),
    },

    mobile_phone: {
      required: helpers.withMessage('Campo obbligatorio', required),
    },

    userType: {
      required: helpers.withMessage('Campo obbligatorio', required),
    },

    call: {
      required: helpers.withMessage('Campo obbligatorio', required),
    },

  };
});



const v$ = useVuelidate(rules, state);

const submitClicked = ref(false)

const errorMessage = ref('');

const buttonDisabled = ref(false);

const csrfRetrieved = ref(false);

const form = ref(null);



/**
 *
 */
function csrf() {
  return $apiFetch("/sanctum/csrf-cookie");
}

/**
 *
 */
async function register() {

  submitClicked.value = true;

  errorMessage.value = '';

  buttonDisabled.value = true;

  v$.value.$validate();

  if (!v$.value.$error) {

    if (csrfRetrieved.value == false) {

      await csrf();

      csrfRetrieved.value = true;

    }




    try {

      const lead = await $apiFetch("/api/leads/register", {

        method: "POST",

        body: {
          type: state.userType,
          first_name: state.first_name,
          last_name: state.last_name,
          email: state.email,
          mobile_phone: state.mobile_phone,
        },
      });


      state.registered = true;

      buttonDisabled.value = false;

    } catch (error) {


      errorMessage.value = error.response._data.message;

      state.registered = false;

      buttonDisabled.value = false;

      /*
      var element = document.querySelector('#form');

      element.scrollTop = element.scrollHeight;
      */


    }
  }

  buttonDisabled.value = false;






}
</script>
