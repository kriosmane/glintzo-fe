<template>
  <div class="sm:pb-24 pt-24 sm:pt-32 xl:pb-32 overflow-hidden">
    <swiper
      :speed="1500"
      class="overflow-initial"
      :modules="modules"
      :mousewheel="true"
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide class="h-auto-imp" v-for="(slide, index) in slides" :key="index">
        <div class="h-full">
          <div
            :class="
              ' h-full min-h-[501px]  sm:min-h-[340px] bg-slide-' + slide.id
            "
            class="pt-0 xl:pb-0"
          >
            <div
              class="mx-auto flex max-w-8xl flex-col items-center gap-x-28 gap-y-10 px-10 sm:gap-y-8 lg:px-40 xl:flex-row xl:items-stretch"
            >
              <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                <div class="relative h-full h-[258px] sm:h-auto">
                  <img
                    class="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-2xl"
                    :src="slide.image"
                  />
                </div>
              </div>

              <div
                class="w-full max-w-2xl xl:max-w-none xl:flex-auto sm:pt-12 pb-20 sm:space-y-8"
              >
                <h2 class="text-dark-blue font-bold text-[30px]">{{ slide.title }}</h2>

                <blockquote
                  class="text-lg font-normal leading-[27px] text-black sm:text-lg sm:leading-[27px]"
                >
                  <p>
                    {{ slide.text }}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

import image_1 from "~/assets/images/slide_1.png";
import image_2 from "~/assets/images/slide_2.png";
import image_3 from "~/assets/images/slide_3.png";
import image_4 from "~/assets/images/slide_4.png";

const modules = [Mousewheel, Pagination];

const slides = [
  {
    id: 1,
    title: "Cattura le migliori opportunità",
    image: image_1,
    text:
      "Glintzo ti permette di trovare maggiori opportunità lavorative, nuovi clienti,mettendoti in contatto con aziende e privati non necessariamente locali, ampliando il tuo portfolio e affrontando sempre nuove sfide. Su Glintzo puoi lavorare: con chi vuoi, quando vuoi e da dove vuoi.",
  },
  {
    id: 2,
    title: "Metti in luce il tuo portfolio",
    image: image_2,
    text:
      "Glintzo valorizza le tue competenze distintive, ancora prima di chi sei, della tua età, genere ed etnia. Crediamo che il tuo portfolio debba essere l'informazione più importante che viene data su di te come Visual Creator per presentarti ad aziende e privati.",
  },
  {
    id: 3,
    title: "Inquadra le richieste dei clienti",
    image: image_3,
    text:
      "Grazie a un'interfaccia user friendly Glintzo permette una comunicazione semplice ed efficace con i clienti. Stiamo lavorando allo sviluppo delle Glintzo Guidelines per garantire processi trasparenti e contratti chiari, tutelando i creators da un lato e garantendo lavori di qualità dall'altro.",
  },
  {
    id: 4,
    title: "Metti a fuoco il tuo business",
    image: image_4,
    text:
      "Non è mai stato così facile salvaguardare i tuoi interessi come su Glintzo. Non dovrai più preoccuparti di come promuovere i tuoi lavori e di gestire le tue vendite. Glintzo lo farà per te, permettendoti di concentrarti sul tuo talento e di guadgnare senza alcuna preoccupazione.",
  },
];

/**
 *
 */
function onSwiper(swiper) {}

/**
 *
 */
function onSlideChange() {}
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  border-radius: 0px !important;
  height: 5px;
  width: 38px;
  background: #e5dffe;
  border-radius: 8px;
}
:deep(.swiper-pagination-bullet-active) {
  background: #1e16fe !important;
}
</style>
