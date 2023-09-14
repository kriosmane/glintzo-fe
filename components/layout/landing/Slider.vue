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
  <div class="pb-24 pt-24 sm:pt-32 xl:pb-32 overflow-hidden bg-white">
    <swiper :speed="1500" class="overflow-initial" :modules="modules" :mousewheel="mousewheelOptions"
      :pagination="paginationOptions" :slides-per-view="1" :space-between="0" @swiper="onSwiper"
      @slideChange="onSlideChange" @reachEnd="reachEdge" @toEdge="reachEdge">
      <swiper-slide class="h-auto-imp" v-for="(slide, index) in slides" :key="index">
        <div :class="' px-10 py-4   lg:py-0 lg:px-0 h-full block lg:flex items-center   min-h-[340px] bg-slide-' +
          slide.id
          ">
          <img
            class="lg:max-w-[344px] relative top-[-45px] lg:top-0 mb-[-30px] lg:mb-0 w-full lg:w-auto h-[200px] lg:h-[115%] rounded-2xl object-cover shadow-2xl lg:ms-[16.6%] lg:me-[8.3%]"
            :src="slide.image" />
          <div class="lg:pe-[8.3%] my-5">
            <h2 class="text-dark-blue font-bold text-[30px] mb-5">{{ slide.title }}</h2>
            <blockquote class="text-lg font-normal leading-[27px] text-black sm:text-lg sm:leading-[27px]">
              <p>
                {{ slide.text }}
              </p>
            </blockquote>
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
