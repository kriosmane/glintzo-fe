<script setup>
/**
 * 
 */
import image_1 from "~/assets/images/glintzo.png";
useSeoMeta({
    title: 'Glintzo - Trova i migliori fotografi e videomaker per il tuo evento',
    ogTitle: 'Glintzo - Trova i migliori fotografi e videomaker per il tuo evento',
    description: 'Cerca e trova fotografi e videomaker per il tuo evento con Glintzo. Connessioni più facili e veloci tra visual creator e aziende. Scopri come Glintzo può migliorare la tua esperienza di ricerca',
    ogDescription: 'Cerca e trova fotografi e videomaker per il tuo evento con Glintzo. Connessioni più facili e veloci tra visual creator e aziende. Scopri come Glintzo può migliorare la tua esperienza di ricerca',
    ogImage: image_1,
    twitterCard: 'summary_large_image',
})
</script>
<template>
    <header ref="headRef"
        class="bg-black sticky top-0 z-[9999]  transition-opacity duration-300 ease-in-out min-h-[78px] flex items-center">
        <nav class="w-full mx-auto py-4 px-8">
            <div class="flex">
                <a href="/">
                    <span class="sr-only">Glintzo</span>
                    <img class="h-10 w-auto" src="~/assets/images/logo.svg" />
                </a>
            </div>
        </nav>
    </header>
</template>