<script setup>
/**
 * 
 */
import image_1 from "~/assets/images/glintzo.png";
useSeoMeta({
    title: 'Glintzo',
    ogTitle: 'La piattaforma di matching amica dei visual creator',
    description: 'Mettiamo in contatto aziende e privati con i migliori fotografi e videomaker sul panorama italiano in modo semplice e innovativo',
    ogDescription: 'Mettiamo in contatto aziende e privati con i migliori fotografi e videomaker sul panorama italiano in modo semplice e innovativo',
    ogImage: image_1,
    twitterCard: 'summary_large_image',
})
</script>
<template>
    <header ref="headRef"
        class="bg-black sticky top-0 z-[9999]  transition-opacity duration-300 ease-in-out min-h-[78px] flex items-center">
        <nav class="w-full max-w-8xl mx-auto py-4 px-8">
            <div class="flex">
                <a href="/">
                    <span class="sr-only">Glintzo</span>
                    <img class="h-8 w-auto" src="~/assets/images/logo.png" />
                </a>
            </div>
        </nav>
    </header>
</template>