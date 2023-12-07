<script setup>

/**
 * 
 */
definePageMeta({
  layout: "landing",
});

import middle_1 from "~/assets/images/middle-1.png";
import middle_2 from "~/assets/images/middle-2.png";

let style_1 = 'background-image: url(' + middle_1 + ')';
let style_2 = 'background-image: url(' + middle_2 + ')';

</script>

<template>
  <LazyLayoutLandingHero></LazyLayoutLandingHero>



  <div class="bg-[#BECAEF] h-auto lg:h-screen">
    <div class="flex justify-center items-center h-full px-10 py-10">
      <img class="md:h-[659px]" src="~/assets/images/middle-1.png">

    </div>
  </div>


  <div class="bg-white h-auto lg:h-screen">
    <div class="flex justify-center items-center h-full px-10 py-10">
      <img class="md:h-[659px]" src="~/assets/images/middle-2.png">
    </div>
  </div>

  <LazyLayoutLandingSlider></LazyLayoutLandingSlider>

  <LazyLayoutLandingTimeline></LazyLayoutLandingTimeline>

  <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 bg-[#BECAEF]">
    <div class=" flex flex-col ">

      <div class="flex justify-center">
        <h2
          class="text-[35px] leading-[normal] text-center font-gopher  font-bold tracking-tight text-black sm:text-[40px] lg:leading-[60px] max-w-[475px]">
          Sei un visual creator e
          vuoi saperne di più?
        </h2>
      </div>
      <div class="flex justify-center text-lg mt-5 leading-8 text-black">
        <p class="max-w-[620px] text-center">
          Clicca su "Registrati " e compila il Form per accedere alla community
          di Glintzo e
          diventa uno dei primi creator!
        </p>
      </div>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink to="/register" class="rounded-[20px]  bg-lime px-5 py-4 text-normal  font-bold text-black">
          Registrati
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
