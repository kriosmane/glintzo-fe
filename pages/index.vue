<style>
.box-container {
  overflow: hidden;
}

.text-illusion {
  background: white;
  color: black !important;
  mix-blend-mode: screen;
  font-family: "Poppins";
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 180px !important;
  line-height: 200px !important;
}

.trigger {
  position: relative;
  height: 100%;
  min-height: 100vh;
  background-color: #02145a;
}

.panel.effect-section {
  /*   display: flex; */
  position: absolute;
  width: 100%;
  height: 100%;
}

.effect-section:not(.first) {
  opacity: 0;
  visibility: hidden;
}

#rotate {
  text-align: center;
}

.custom-img-mobile-container {
  width: calc(100% + 100px);
}

section {
  height: 100vh;
  text-align: center;
  line-height: 100vh;
  background-color: #02145a;
  color: white;
  font-size: 2em;
  position: relative;
}

.h-auto-imp {
  height: auto !important;
}

.box-container p,
.trigger p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 130px;
  margin: auto;
}

.panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
}

.panel.description {
  padding-bottom: 60px;
}

.panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
}

#orange {
  background-color: orange;
}

.bg {
  background-size: cover;
  background-position: top;
}

.overflow-initial {
  overflow: initial !important;
}

#red {
  background-color: red;
}

.section p {
  position: relative;
}

@media screen and (max-width: 1280px) {
  .trigger p {
    font-size: 45px;
  }

  .text-illusion {
    font-size: 65px !important;
    line-height: 85px !important;
  }
}
</style>
<template>
  <div class="bg-white">
    <main>
      <div class="relative isolate">
        <div class="overflow-hidden">
          <div class="pb-32 ps-10 sm:ps-20 xl:ps-40 pt-10 w-full max-w-8xl ms-auto 2xl:mx-auto ">
            <div class="lg:flex items-center">
              <div class="lg:mb-28 flex-1 max-w-[600px] me-5">
                <h1
                  class="text-[35px] leading-[normal] text-center sm:text-left  font-bold tracking-tight text-[#FB2283] sm:text-[40px] sm:leading-[60px]">
                  La piattaforma di matching amica dei visual creator
                </h1>
                <p
                  class="relative font-normal text-center sm:text-left text-[#02145A] mt-4 text-[25px] leading-[38px] sm:max-w-md lg:max-w-none">
                  Mettiamo in contatto <span class="font-bold">aziende</span> e
                  <span class="font-bold">privati</span> con i migliori
                  <span class="font-bold">fotografi</span> e
                  <span class="font-bold">videomaker</span> sul panorama italiano in modo
                  <span class="font-bold">semplice</span> e
                  <span class="font-bold">innovativo</span>
                </p>
                <div class="mt-8  flex justify-center sm:justify-start items-center gap-x-6">
                  <NuxtLink to="/register"
                    class="rounded-md w-[140px] text-center uppercase bg-[#1E16FE] px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Registrati
                  </NuxtLink>
                </div>
              </div>
              <!-- per krios  se vuoi che le immagini mobile prendano sempre tutto lo schermo rimuovi il  max-w-[780px] io ho inserito questo perchè da 768 cominciano ad essere giganti-->
              <div class="w-full lg:hidden flex mt-5 ms-[-140px] max-w-[780px] custom-img-mobile-container">
                <div class="flex flex-col me-5">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="rounded-lg object-cover lg:min-h-[280px] lg:min-w-[250px] mb-5" />
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="rounded-lg object-cover lg:min-h-[280px] lg:min-w-[250px]" />
                </div>
                <div class="flex flex-col mt-[25%]">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="rounded-lg object-cover lg:min-h-[280px] lg:min-w-[250px] mb-5" />
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="rounded-lg object-cover lg:min-h-[280px] lg:min-w-[250px]" />
                </div>
              </div>
              <div class="flex flex-1 lg:me-[-200px] hidden lg:flex">
                <div class="flex flex-col items-center justify-center me-5">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="rounded-lg object-cover lg:min-h-[280px] lg:min-w-[250px]" />
                </div>
                <div class="flex flex-col items-center justify-center me-5">
                  <img
                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="rounded-lg mb-5 lg:min-h-[280px] object-cover lg:min-w-[250px]" />
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                    alt="" class="rounded-lg lg:min-h-[280px] object-cover lg:min-w-[250px]" />
                </div>
                <div class="flex flex-col items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                    alt="" class="rounded-lg mb-5 lg:min-h-[280px] object-cover lg:min-w-[250px]" />
                  <img
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                    alt="" class="rounded-lg mb-5 lg:min-h-[280px] object-cover lg:min-w-[250px]" />
                  <img
                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="rounded-lg lg:min-h-[280px] object-cover lg:min-w-[250px]" />
                </div>
              </div>

              <!--  <div
                class="mt-14 flex justify-end gap-8 md:-mt-44 lg:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
              >
                <div
                  class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                >
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- effect slide words -->
      <!--    <div class="box-container">
        <section class="top">
          <div class="img red bg-[#02145A]"></div>
          <p>Qualità</p>
        </section>
        <section class="mid">
          <div class="img orange bg-[#02145A]"></div>
          <p>Professionalità</p>
        </section>
        <section class="bottom">
          <div class="img yellow bg-[#02145A]"></div>
          <p>Innovazione</p>
        </section>
        <section class="bottom">
          <div class="img gree bg-[#02145A]"></div>
          <p>Creatività</p>
        </section>
        <section class="bottom">
          <div class="img blue bg-[#02145A]"></div>
          <p>Fiducia</p>
        </section>
      </div> -->
      <!-- end effect slide words -->
      <div class="trigger">
        <div class="first panel one effect-section">
          <p></p>
          <div class="scroll-down"></div>
        </div>
        <div class="panel two effect-section">
          <p>Qualità</p>
          <div></div>
        </div>
        <div class="panel three effect-section">
          <p>Professionalità</p>
          <div></div>
        </div>
        <div class="panel four effect-section">
          <p>Innovazione</p>
          <div></div>
        </div>
        <div class="panel five effect-section">
          <p>Creatività</p>
          <div></div>
        </div>
        <div class="panel six effect-section">
          <p>Fiducia</p>
          <div></div>
        </div>
      </div>
      <div
        class="panel text-effect min-h-screen min-w-full bg bg-[#02145A] bg-[url('assets/images/background-text-2.png')]">
      </div>
      <p class="panel text-effect min-h-screen min-w-full text-illusion">
        CREATIVITY<br />
        IS <br />HUMAN
      </p>

      <LazyLayoutLandingSlider></LazyLayoutLandingSlider>

      <LazyLayoutLandingTimeline></LazyLayoutLandingTimeline>

      <div style="
          background: linear-gradient(
            to top,
            #dee1fe 0.05%,
            rgba(222, 225, 254, 0) 99.95%
          );
        ">
        <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="mx-auto max-w-2xl text-center space-y-5">
            <h2
              class="text-[35px] leading-[normal] text-center   font-bold tracking-tight text-[#FB2283] sm:text-[40px] sm:leading-[60px]">
              Sei un visual creator e<br />
              vuoi saperne di più?
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Clicca su "Registrati " e compila il Form per accedere alla community<br> di
              Glintzo e diventa uno dei primi creator!
            </p>



            <div class="mt-10 flex items-center justify-center gap-x-6">
              <NuxtLink to="/register"
                class="rounded-md w-[140px] text-center uppercase bg-[#1E16FE] px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Registrati
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger",
      scrub: true,
      pin: true,
      end: "+=" + window.innerHeight * 15, // modificare questo numero per la velocità
    },
  });

  tl.to(".one", { opacity: 0 });

  tl.fromTo(
    ".two",
    { autoAlpha: 0, y: 50, skewY: -4 },
    { skewY: 0, duration: 2.5, autoAlpha: 1, y: 0 }
  );
  tl.fromTo(
    ".two",
    { autoAlpha: 1, y: 0 },
    {
      duration: 2.5,
      autoAlpha: 0,
      y: 0,
      opacity: 0,
      y: -100,
      ease: "power1.in",
      skewY: 0,
      rotationX: 40,
    }
  );
  tl.fromTo(".two", { duration: 2.5, autoAlpha: 0 }, { autoAlpha: 0, delay: 2 });

  tl.fromTo(
    ".three",
    { autoAlpha: 0, y: 50, skewY: -4 },
    { skewY: 0, duration: 2.5, autoAlpha: 1, y: 0 }
  );
  tl.fromTo(
    ".three",
    { autoAlpha: 1, y: 0 },
    {
      duration: 2.5,
      autoAlpha: 0,
      y: 0,
      opacity: 0,
      y: -100,
      ease: "power1.in",
      skewY: 0,
      rotationX: 40,
    }
  );
  tl.fromTo(".three", { duration: 2.5, autoAlpha: 0 }, { autoAlpha: 0, delay: 2 });

  tl.fromTo(
    ".four",
    { autoAlpha: 0, y: 50, skewY: -4 },
    { skewY: 0, duration: 2.5, autoAlpha: 1, y: 0 }
  );
  tl.fromTo(
    ".four",
    { autoAlpha: 1, y: 0 },
    {
      duration: 2.5,
      autoAlpha: 0,
      y: 0,
      opacity: 0,
      y: -100,
      ease: "power1.in",
      skewY: 0,
      rotationX: 40,
    }
  );
  tl.fromTo(".four", { duration: 2.5, autoAlpha: 0 }, { autoAlpha: 0, delay: 2 });

  tl.fromTo(
    ".five",
    { autoAlpha: 0, y: 50, skewY: -4 },
    { skewY: 0, duration: 2.5, autoAlpha: 1, y: 0 }
  );
  tl.fromTo(
    ".five",
    { autoAlpha: 1, y: 0 },
    {
      duration: 2.5,
      autoAlpha: 0,
      y: 0,
      opacity: 0,
      y: -100,
      ease: "power1.in",
      skewY: 0,
      rotationX: 40,
    }
  );
  tl.fromTo(".five", { duration: 2.5, autoAlpha: 0 }, { autoAlpha: 0, delay: 2 });

  tl.fromTo(
    ".six",
    { autoAlpha: 0, y: 50, skewY: -4 },
    { duration: 2.5, autoAlpha: 1, y: 0, skewY: 0 }
  );

  //tl.from(".two",{ y: 100, skewY: -4, rotationX: 0}).to(".two",{ autoAlpha: 1, y: -100, ease: "power1.in", skewY: 0, rotationX: 60, opacity:0},"<");
  /*   tl.to( ".three",{ y: 100, skewY: -4, rotationX: 0}).to(".three",{ autoAlpha: 1, y: -100, ease: "power1.in", skewY: 0, rotationX: 60, opacity:0},"<");
      tl.to( ".four",{ y: 100, skewY: -4, rotationX: 0}).to(".four",{ autoAlpha: 1, y: -100, ease: "power1.in", skewY: 0, rotationX: 60, opacity:0},"<");
      tl.to( ".five",{ y: 100, skewY: -4, rotationX: 0}).to(".five",{ autoAlpha: 1, y: -100, ease: "power1.in", skewY: 0, rotationX: 60, opacity:0},"<");
    tl.to(".five", {opacity: 0,});
      tl.to( ".six",{ y: 100, skewY: -4, rotationX: 0}).to(".six",{ autoAlpha: 1, y: -100, ease: "power1.in", skewY: 0, rotationX: 60, opacity:0},"<");
    tl.to(".s", {opacity: 0,}); */
  /*   const sections = gsap.utils.toArray("section");

  sections.forEach((section, index) => {
    const text = section.querySelector("p");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
         scrub: 1,
         markers: true, 
        start: 'top top',
            end: 'bottom top',
         pin: true,
      },
    });

    tl.from(text, { opacity: 0, y: 100, skewY: -4, rotationX: 0 });

    if (index < sections.length - 1) {
      tl.to(text, { opacity: 0, y: -100, ease: "power1.in", skewY: 0, rotationX: 60 });
    }
  });
 */
  let panels = gsap.utils.toArray(".panel.text-effect");

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: i === panels.length - 1 ? false : true,
      //end:"bottom 100",
      pinSpacing: false,
    });
  });
}

definePageMeta({
  layout: "landing",
});

/**
 *
 */
const title = useState("title");
</script>
