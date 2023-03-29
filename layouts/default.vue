<template>
    <div class="min-h-screen text-gray-900">

        <Title>{{ title }}</Title>

        <div class="flex flex-row">

            <div class="w-5/12 hidden md:block bg-primary">

                <div class="flex justify-center items-center h-screen px-10">


                    <div>

                        <img src="~/assets/images/logo_transparent.png" />

                    </div>
                    
                    
                </div>

            </div>

            <div class="w-full  md:w-7/12 min-h-screen">

                <nav class="bg-[#EFEFEF] text-lg py-6 px-10 md:px-20">

                    <div class="container mx-auto flex items-center justify-between">

                        <div class="w-[200px]">

                            <NuxtLink to="/" class="font-bold">

                                <img src="~/assets/images/logo.png" />

                            </NuxtLink>
                            
                            
                        </div>


                        <div class="text-sm font-medium">

                            <span>Hai bisogno di aiuto?</span> 

                            <span class="ml-1 text-primary">Scrivici</span>  
                        
                        </div>

                    </div>

                </nav>

                <slot />

            </div>

        </div>

    </div>

</template>

<script setup>

const title = useState('title', () => 'Glintzo');

</script>