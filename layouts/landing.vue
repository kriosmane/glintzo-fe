<template>
    <div>

        <LazyLayoutLandingHeader></LazyLayoutLandingHeader>
        <slot />
        <LazyLayoutLandingFooter />
    </div>
</template>

<script setup>
import { usePreferredDark, useFavicon } from '@vueuse/core'

/**
 * 
 */
const setFavicon = () => {

    const isDark = usePreferredDark();

    const favicon = computed(() => isDark.value ? '/favicon_dark.png' : '/favicon_light.png');

    useFavicon(favicon.value, {
        rel: 'icon'
    })
}

/**
 * 
 */
onMounted(() => {
    setFavicon();
})

</script>