<script setup>
/**
 * 
 */
definePageMeta({
  layout: "landing",
});

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiArrowDown } from '@mdi/js';


const sections = ref(['first', 'second', 'third', 'fourth', 'fifth', 'sixth']); // Assicurati che questi siano gli ID delle tue sezioni


</script>

<template>
  <LazyLayoutLandingHero ref="first"> </LazyLayoutLandingHero>



  <div class="bg-[#BECAEF] h-screen" ref="second">
    <div class="flex  justify-center items-center h-full">
      <!-- <img class="lg:h-[600px] object-fill" src="~/assets/images/middle-2-new.png">-->
      <img class="md:hidden h-[564px]" src="~/assets/images/middle_1_375.png">
      <img class="hidden md:block lg:hidden h-[692px]" src="~/assets/images/middle_1_768.png">
      <img class="hidden lg:block 3xl:hidden h-[730px]" src="~/assets/images/middle_1_1024.png">

      <div class="hidden 3xl:block 4xl:hidden ">
        <img class="h-[745px]" src="~/assets/images/middle_1_1440.png">
      </div>

      <div class="hidden 4xl:block">
        <img class="h-[835px]" src="~/assets/images/middle_1_1920.png">
      </div>
    </div>
  </div>



  <div class="bg-white h-screen" ref="third">
    <div class="flex  justify-center items-center h-full">
      <!-- <img class="lg:h-[600px] object-fill" src="~/assets/images/middle-2-new.png">-->
      <img class="md:hidden h-[564px]" src="~/assets/images/middle_2_375.png">
      <img class="hidden md:block lg:hidden h-[692px]" src="~/assets/images/middle_2_768.png">
      <img class="hidden lg:block 3xl:hidden h-[730px]" src="~/assets/images/middle_2_1024.png">

      <div class="hidden 3xl:block 4xl:hidden ">
        <img class="h-[745px]" src="~/assets/images/middle_2_1440.png">
      </div>

      <div class="hidden 4xl:block">
        <img class="h-[835px]" src="~/assets/images/middle_2_1920.png">
      </div>
    </div>
  </div>



  <LazyLayoutLandingSlider ref="fourth"></LazyLayoutLandingSlider>



  <LazyLayoutLandingTimeline ref="fifth"></LazyLayoutLandingTimeline>



  <div ref="sixth" class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 bg-[#BECAEF]">
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
          Unisciti alla community di Glintzo e diventa uno dei nostri!<br>Clicca subito su "Registrati", completa il
          Form e inizia a condividere la tua arte con il mondo!
        </p>
      </div>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink to="/register" class="rounded-[20px]  bg-lime px-5 py-4 text-normal  font-bold text-black">
          Registrati
        </NuxtLink>
      </div>
    </div>
  </div>
  <!-- 
  <button @click="scrollToNextSection" type="button" class=" fixed bottom-10 right-10 w-16 h-16 bg-lime rounded-full text-center flex items-center
    justify-center"><svg-icon size="36" type="mdi" :path="mdiArrowDown"></svg-icon></button>
    -->
</template>
