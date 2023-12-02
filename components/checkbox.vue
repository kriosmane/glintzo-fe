<template>
    <input type="checkbox" class="h-4 w-4 rounded cursor-pointer focus:ring-0 focus:ring-offset-0">
</template>
<script setup>

const props = defineProps({
    modelValue: Boolean,
});
</script>
<style>
[type='checkbox']:checked {
    background-image: url("assets/images/checked.png");
}
</style>