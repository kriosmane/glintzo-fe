<style>
.box-container {
  overflow: hidden;
}

.text-illusion {
  background: white;
  color: black !important;
  mix-blend-mode: screen;
<<<<<<< HEAD
  font-family: "Poppins";
=======
  font-family: 'Poppins';
>>>>>>> 7a5ce29c72dbce4dad422c7aef707a1362b0aed9
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 180px !important;
  line-height: 200px !important;
}

<<<<<<< HEAD
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

=======
>>>>>>> 7a5ce29c72dbce4dad422c7aef707a1362b0aed9
section {
  height: 100vh;
  text-align: center;
  line-height: 100vh;
  background-color: #02145a;
  color: white;
  font-size: 2em;
  position: relative;
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
  background-position: bottom;
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
          <div class="mx-auto max-w-8xl px-10 pb-32 pt-36 sm:pt-60 lg:px-40 lg:pt-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="w-full max-w-xl  xl:max-w-2xl">
                <h1 class="text-4xl font-bold tracking-tight text-[#FB2283] sm:text-[40px] sm:leading-[60px]">
                  La piattaforma di matching amica dei visual creator
                </h1>
                <p class="relative font-normal text-[#02145A] mt-6 text-[25px] leading-[38px] sm:max-w-md lg:max-w-none">
                  Mettiamo in contatto <span class="font-bold">aziende</span> e
                  <span class="font-bold">privati</span> con i migliori
                  <span class="font-bold">fotografi</span> e
                  <span class="font-bold">videomaker</span> sul panorama italiano in modo
                  <span class="font-bold">semplice</span> e
                  <span class="font-bold">innovativo</span>..
                </p>
                <div class="mt-10 flex items-center gap-x-6">
                  <NuxtLink to="/register"
                    class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Registrati
                  </NuxtLink>
                </div>
              </div>
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div
                  class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                  </div>
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                  </div>
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                  </div>
                </div>
              </div>
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
        class="panel text-effect min-h-screen min-w-full bg bg-[#02145A] bg-[url('assets/images/background-text.png')]"
      ></div>
      <p class="panel text-effect min-h-screen min-w-full text-illusion bg-gray-700">
        CREATIVITY<br />
        IS <br />HUMAN
      </p>

      <div class=" pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
        <div class="bg-[#2286FB] pb-20 sm:pb-24 xl:pb-0">
          <div
            class="mx-auto flex max-w-8xl flex-col items-center gap-x-8 gap-y-10 px-10 sm:gap-y-8 lg:px-40 xl:flex-row xl:items-stretch">
            <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img class="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt="" />
              </div>
            </div>
            <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure class="relative isolate pt-6 sm:pt-12">
                <svg viewBox="0 0 162 128" fill="none" aria-hidden="true"
                  class="absolute left-0 top-0 -z-10 h-32 stroke-white/20">
                  <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
                </svg>
                <blockquote class="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    Gravida quam mi erat tortor neque molestie. Auctor aliquet at
                    porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
                    posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque
                    bibendum.
                  </p>
                </blockquote>
                <figcaption class="mt-8 text-base">
                  <div class="font-semibold text-white">Judith Black</div>
                  <div class="mt-1 text-gray-400">CEO of Workcation</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-24">
        <div class="mx-auto max-w-8xl px-10 lg:px-40 space-y-20">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-[#FB2283] sm:text-[40px] sm:leading-[60px]">
              Come funziona
            </h1>
          </div>

          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <time datetime="2021-08" class="flex items-center text-sm font-semibold leading-6 text-blue-600">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>
                1
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"></div>
              </time>
              <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#02145A]">
                Crea il tuo profilo
              </p>
              <p class="mt-1 text-base leading-6 text-gray-600">
                Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores
                et dolorem dolorem optio voluptate repudiandae.
              </p>
            </div>
            <div>
              <time datetime="2021-12" class="flex items-center text-sm font-semibold leading-6 text-blue-600">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>
                2
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"></div>
              </time>
              <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#02145A]">
                Rispondi alle richieste
              </p>
              <p class="mt-1 text-base leading-6 text-gray-600">
                Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima
                impedit sapiente a architecto nihil.
              </p>
            </div>
            <div>
              <time datetime="2022-02" class="flex items-center text-sm font-semibold leading-6 text-blue-600">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>
                3
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"></div>
              </time>
              <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#02145A]">
                Finalizza il preventivo
              </p>
              <p class="mt-1 text-base leading-6 text-gray-600">
                Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut
                officiis earum eum quia facilis. Hic deleniti dolorem quia et.
              </p>
            </div>
            <div>
              <time datetime="2022-12" class="flex items-center text-sm font-semibold leading-6 text-blue-600">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>
                4
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"></div>
              </time>
              <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#02145A]">
                Completa il lavoro
              </p>
              <p class="mt-1 text-base leading-6 text-gray-600">
                Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id
                architecto voluptatem hic aut pariatur velit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style="
            background: linear-gradient(
              to top,
              #dee1fe 0.05%,
              rgba(222, 225, 254, 0) 99.95%
            );
          ">
        <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="mx-auto max-w-2xl text-center space-y-5">
            <h2 class="font-bold tracking-tight text-[#FB2283] sm:text-[40px] sm:leading-[60px]">
              Sei un visual creator e<br />
              vuoi saperne di più?
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Clicca su "Registrati " e compila il Form per accedere alla community di
              Glintzo.
            </p>
            <h2 class="text-xl font-bold tracking-tight text-gray-900">Cosa aspetti?</h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Diventa uno dei primi creator!
            </p>

            <div class="mt-10 flex items-center justify-center gap-x-6">
              <NuxtLink to="/register"
                class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
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
      markers: true,
    },
  });

  tl.to(".one", {opacity: 0});

tl.fromTo(".two", {autoAlpha: 0, y: 50,skewY:-4}, {skewY:0,duration: 1, autoAlpha: 1, y: 0});
tl.fromTo(".two",  {duration: 1, autoAlpha: 1, y: 0}, {duration: 1, autoAlpha: 0, y: 0, opacity:0, y: -100, ease: "power1.in", skewY: 0, rotationX: 60});

tl.fromTo(".three", {autoAlpha: 0, y: 50,skewY:-4}, {skewY:0,duration: 1, autoAlpha: 1, y: 0});
tl.fromTo(".three",  {duration: 1, autoAlpha: 1, y: 0}, {duration: 1, autoAlpha: 0, y: 0, opacity:0, y: -100, ease: "power1.in", skewY: 0, rotationX: 60});

tl.fromTo(".four", {autoAlpha: 0, y: 50,skewY:-4}, {skewY:0,duration: 1, autoAlpha: 1, y: 0});
tl.fromTo(".four",  {duration: 1, autoAlpha: 1, y: 0}, {duration: 1, autoAlpha: 0, y: 0, opacity:0, y: -100, ease: "power1.in", skewY: 0, rotationX: 60});

tl.fromTo(".five", {autoAlpha: 0, y: 50,skewY:-4}, {skewY:0,duration: 1, autoAlpha: 1, y: 0});
tl.fromTo(".five",  {duration: 1, autoAlpha: 1, y: 0}, {duration: 1, autoAlpha: 0, y: 0, opacity:0, y: -100, ease: "power1.in", skewY: 0, rotationX: 60});

tl.fromTo(".six", {autoAlpha: 0, y: 50,skewY:-4}, {duration: 1, autoAlpha: 1, y: 0,skewY:0});

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
<<<<<<< HEAD
         scrub: 1,
         markers: true, 
        start: 'top top',
            end: 'bottom top',
         pin: true,
=======
        pin: true,
        scrub: 1,
        pinSpacing: true,
        start: "top top",
        end: "+=100",
>>>>>>> 7a5ce29c72dbce4dad422c7aef707a1362b0aed9
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
