<script setup></script>
<template>
    <div class="bg-white overflow-hidden">


        <div class="relative isolate ">

            <div
                class="w-full h-auto lg:h-screen flex lg:flex-row flex-col items-center px-8 pt-10 pb-10 lg:pt-40 lg:pb-28 space-y-5 lg:space-y-[none]">

                <div class="basis-2/3 space-y-6 lg:px-24">

                    <h1
                        class="max-w-lg text-[35px] lg:text-[56px] text-center lg:text-left leading-[normal] lg:leading-[53px] font-gopher font-bold tracking-tight text-primary">
                        La
                        piattaforma <br>di matching
                        amica <br>dei
                        visual creator </h1>

                    <p class="text-[22px] lg:text-[25px] font-normal leading-[normal] text-black text-center lg:text-left">
                        Mettiamo in contatto <span class="font-bold">aziende</span> e
                        <span class="font-bold">privati</span> con i migliori
                        <span class="font-bold">fotografi</span> e
                        <span class="font-bold">videomaker</span> sul panorama italiano in modo
                        <span class="font-bold">semplice</span> e
                        <span class="font-bold">innovativo</span>
                    </p>
                    <div class="mt-10 flex justify-center lg:justify-start items-center gap-x-6">

                        <NuxtLink to="/register"
                            class="rounded-[20px]  bg-lime px-5 py-4 text-normal  font-bold text-black">
                            Registrati
                        </NuxtLink>

                    </div>
                </div>
                <div class="basis-1/3">
                    <div class="lg:-mr-96">
                        <img src="~/assets/images/new_hero_1.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>