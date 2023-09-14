<template>
    <div class="h-screen"></div>
</template>
<script setup>
definePageMeta({
    layout: "landing",
});

useHead({
    title: 'Glintzo',
    script: [
        {
            async: true,
            src: 'https://consent.cookiebot.com/904a8c3b-7ad0-4c82-ba50-fa2f1d5015be/cd.js',
            id: "CookieDeclaration",
        },
    ]
})


</script>