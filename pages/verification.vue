<template>
    <div class="mx-10 sm:mx-20 py-10">

        <Title>{{ title }}</Title>

        <div class="flex flex-col space-y-10">

            <div>
                <h1 class="text-4xl font-bold">Ci siamo quasi! Un ultimo sforzo per verificare i tuoi recapiti</h1>
            </div>

            <div class="flex flex-col space-y-2">

                <h3 class="font-normal">Abbiamo inviato un codice di verifica alla tua email <span class="font-bold">{{
                    user?.email }}</span> e al tuo numero di telefono <span class="font-bold">{{ user?.mobile_phone
    }}</span></h3>

            </div>

            <div>

                <h3 class="font-bold text-[12px]">Codice di verifica email</h3>

                <text-field :prepend-icon="mdiEmailOutline" type="text" name="ragione_sociale"></text-field>

            </div>

            <div>

                <h3 class="font-bold text-[12px]">Codice di verifica cellulare</h3>

                <text-field :prepend-icon="mdiPhone" type="text" name="ragione_sociale"></text-field>

            </div>

            <div class="flex flex-col space-y-2">

                <h3 >Non hai ricevuto l’SMS? <span class=" text-primary">Invia un altro codice</span></h3>

                <h3 >Hai inserito il numero di cellulare errato? <span class=" text-primary">Modificalo</span></h3>
                

            </div>

            <div>

               <btn @click="prova">Prosegui</btn>

            </div>

        </div>

    </div>
</template>

<script setup>

import { mdiEmailOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';

definePageMeta({

    middleware: ['auth']

});

const title = useState('title');
const user = ref(null);

const { $apiFetch } = useNuxtApp();

onMounted(async () => {

    const response = await $apiFetch('/api/user');

    user.value = response
})

</script>