<style>
.swiper-pagination {
  position: absolute !important;
  bottom: -40px !important;
  top: initial !important;
  display: none;
}

@media only screen and (max-width: 768px) {
  .swiper-pagination {
    display: block;
  }
}
</style>
<template>
  <div class="pb-24 pt-24 sm:pt-32  overflow-hidden bg-white">
    <swiper :speed="1500" class="overflow-initial" :modules="modules" :mousewheel="mousewheelOptions"
      :pagination="paginationOptions" :slides-per-view="1" :space-between="0" @swiper="onSwiper"
      @slideChange="onSlideChange" @reachEnd="reachEdge" @toEdge="reachEdge">
      <swiper-slide class="h-auto-imp" v-for="(slide, index) in slides" :key="index">
        <div class="bg-[#BECAEF] pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">

          <div class="pb-20 sm:pb-24 xl:pb-0" :class="slide.bg">
            <div
              class="mx-auto flex w-full max-w-8xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch xl:h-[400px]">
              <div class="-mt-16 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                <div class="relative aspect-[2/1] h-full  xl:mx-0 xl:aspect-auto">
                  <img
                    class="absolute inset-0 h-full lg:h-[522px] w-full rounded-[68px] border-[3px] border-[black] object-cover shadow-2xl"
                    :src="slide.image" alt="" />
                </div>
              </div>
              <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                <h2 class="font-gopher text-[40px] text-black font-bold">{{ slide.title }}</h2>
                <p class=" lg:text-[18px] leading-[27px]">{{ slide.text }}</p>
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
import "swiper/css/pagination";
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
    bg: "bg-lime",
  },
  {
    id: 2,
    title: "Metti in luce il tuo portfolio",
    image: image_2,
    text:
      "Glintzo valorizza le tue competenze distintive, ancora prima di chi sei, della tua età, genere ed etnia. Crediamo che il tuo portfolio debba essere l'informazione più importante che viene data su di te come Visual Creator per presentarti ad aziende e privati.",
    bg: "bg-[#9C9BEC]"
  },
  {
    id: 3,
    title: "Inquadra le richieste dei clienti",
    image: image_3,
    text:
      "Grazie a un'interfaccia user friendly Glintzo permette una comunicazione semplice ed efficace con i clienti. Stiamo lavorando allo sviluppo delle Glintzo Guidelines per garantire processi trasparenti e contratti chiari, tutelando i creators da un lato e garantendo lavori di qualità dall'altro.",
    bg: "bg-lime",
  },
  {
    id: 4,
    title: "Metti a fuoco il tuo business",
    image: image_4,
    text:
      "Non è mai stato così facile salvaguardare i tuoi interessi come su Glintzo. Non dovrai più preoccuparti di come promuovere i tuoi lavori e di gestire le tue vendite. Glintzo lo farà per te, permettendoti di concentrarti sul tuo talento e di guadgnare senza alcuna preoccupazione.",
    bg: "bg-[#9C9BEC]"
  },
];

/**
 * 
 */
const mousewheelOptions = ref({
  forceToAxis: false,
  releaseOnEdges: true,
  thresholdTime: 1000
});

const paginationOptions = ref({
  clickable: true,
});

/**
 *
 */
function onSwiper(swiper) { }

/**
 *
 */
function onSlideChange(swiper) {

  setTimeout(function () {
    swiper.params.mousewheel.releaseOnEdges = false;

  }, 500);

}

function reachEdge(swiper) {
  setTimeout(function () {
    swiper.params.mousewheel.releaseOnEdges = true;
  }, 1000);
}





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
