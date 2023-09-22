<template>
    <header ref="headRef" :class="headerClass"
        class="bg-dark-blue sticky top-0 z-[9999]  transition-opacity duration-300 ease-in-out min-h-[78px] flex items-center">
        <nav class="w-full max-w-8xl mx-auto py-4 px-10 sm:py-4 sm:px-20 xl:px-40 ">
            <div class="flex">
                <a href="/">
                    <span class="sr-only">Glintzo</span>
                    <img class="h-8 w-auto" src="~/assets/images/logo_transparent.png" />
                </a>
            </div>
        </nav>
    </header>
</template>



<script setup>

import image_1 from "~/assets/images/glintzo.png";

useSeoMeta({
    title: 'Glintzo',
    ogTitle: 'La piattaforma di matching amica dei visual creator',
    description: 'Mettiamo in contatto aziende e privati con i migliori fotografi e videomaker sul panorama italiano in modo semplice e innovativo',
    ogDescription: 'Mettiamo in contatto aziende e privati con i migliori fotografi e videomaker sul panorama italiano in modo semplice e innovativo',
    ogImage: image_1,
    twitterCard: 'summary_large_image',
})

import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const route = useRoute();
const headRef = ref(null);


const headerClass = computed(() => {

    if (route.name !== 'index') {
        return 'bg-dark-blue sticky top-0 z-[9999]  transition-opacity duration-300 ease-in-out min-h-[78px] flex items-center opacity-100';
    }
});

onMounted(() => {
    var prev = window.pageYOffset;
    window.addEventListener("scroll", () => {

        if (route.name == 'index') {

            var curr = window.scrollY;

            if (curr > 40) {



                if (prev > curr) {
                    headRef.value.classList.remove("opacity-0");
                    headRef.value.classList.add("opacity-100", "sticky", "top-0", "z-40");

                } else {
                    headRef.value.classList.remove("opacity-100", "sticky", "top-0", "z-40");
                    headRef.value.classList.add("opacity-0");

                }
                if (curr === 0) {

                }
                prev = curr;
            }

        }


    });
});


</script>

