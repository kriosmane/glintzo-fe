<template>
    <div class="pb-28">
        <div class="mx-auto max-w-8xl px-10 lg:px-40 space-y-20">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-primary font-gopher sm:text-[40px] sm:leading-[60px]">
                    Come funziona
                </h1>
            </div>

            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">


                <div v-for="(time, index) in timeline" :key="index">

                    <time datetime="2021-08" class="flex items-center text-sm font-semibold leading-6 text-pink-light">
                        <svg viewBox="0 0 4 4" class="mr-4 h-5 w-5 flex-none text-lime" aria-hidden="true">
                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                        </svg>
                        <span class="text-black text-base">{{ index + 1 }}</span>
                        <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-black sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                            aria-hidden="true"></div>
                    </time>

                    <p class="mt-6 text-lg font-bold leading-8 tracking-tight text-black">{{ time.title }} </p>

                    <p class="mt-1 text-base leading-6 text-black"> {{ time.text }} </p>

                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

const timeline = [
    {
        title: 'Crea il tuo profilo', text: 'Metti in mostra il tuo talento creando il tuo profilo personalizzato, condividi le tue migliori opere e racconta la tua storia creativa.',
    },
    {
        title: 'Rispondi alle richieste', text: ' Scopri le richieste dei clienti, fai conoscere il tuo portfolio e dimostra di avere il tocco giusto per soddisfare le esigenze del mercato.',
    },
    {
        title: 'Finalizza il preventivo', text: ' Stabilisci il prezzo giusto per il tuo lavoro e crea un preventivo dettagliato per garantire la massima trasparenza e soddisfare i clienti.',
    },
    {
        title: 'Completa il lavoro', text: 'Metti in pratica la tua creatività, completa il lavoro nel modo più professionale e rapido possibile e raccogli i frutti del tuo impegno!',
    },
];


</script>