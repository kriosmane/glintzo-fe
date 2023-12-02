<template>
    <label class="relative flex flex-col cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none">

        <div class="absolute">

            <checkbox v-model="bool" @click="setValue"> </checkbox>

        </div>

        <div class="flex flex-col">

            <div class="text-center">

                <slot></slot>

            </div>

            <span class="block text-sm font-normal text-[14px] text-black text-center"> {{ title }}</span>

        </div>

        <span class="pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>

    </label>
</template>
<script setup>

import { ref } from 'vue'

const props = defineProps({

    modelValue: Boolean,
    /**
     * 
     */
    title: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:modelValue']);

/**
 * 
 */
const bool = ref(props.modelValue);

/**
 */
const setValue = () => {
    bool.value = !bool.value;
    emit('update:modelValue', bool.value);
}



</script>