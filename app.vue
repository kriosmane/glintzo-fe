<template>
    <div>

        <NuxtLayout>

            <NuxtPage />

        </NuxtLayout>

    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Glintzo',
    script: [
        {
            src: 'https://consent.cookiebot.com/uc.js',
            id: "Cookiebot",
            "data-cbid": "904a8c3b-7ad0-4c82-ba50-fa2f1d5015be",
            "data-blockingmode": "auto",



        },
    ]
})
</script>