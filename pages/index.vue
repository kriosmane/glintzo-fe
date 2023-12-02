<script setup>

/**
 * 
 */
definePageMeta({
  layout: "landing",
});

</script>

<template>
  <LazyLayoutLandingHero></LazyLayoutLandingHero>
  <div class="bg-[#BECAEF]">
    <div class="flex justify-center h-screen items-center">
      <img class="w-[325px] h-[235px] lg:w-[900px] lg:h-[650px]" src="~/assets/images/middle-1.png">
    </div>
  </div>
  <div class="bg-white">
    <div class="flex h-screen"></div>
  </div>
  <LazyLayoutLandingSlider></LazyLayoutLandingSlider>

  <LazyLayoutLandingTimeline></LazyLayoutLandingTimeline>

  <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 bg-[#BECAEF]">
    <div class="mx-auto max-w-2xl text-center ">
      <h2
        class="text-[35px] leading-[normal] text-center font-gopher  font-bold tracking-tight text-black sm:text-[40px] sm:leading-[60px]">
        Sei un visual creator e<br />
        vuoi saperne di più?
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-lg leading-8 text-black">
        Clicca su "Registrati " e compila il Form per accedere alla community<br> di
        Glintzo e diventa uno dei primi creator!
      </p>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink to="/register" class="rounded-[20px]  bg-lime px-5 py-4 text-normal  font-bold text-black">
          Registrati
        </NuxtLink>
      </div>
    </div>
  </div>
</template>