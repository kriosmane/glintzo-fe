<template>
    <button :disabled="disabled" :type="type" :class="buttonClass"
        class=" items-center rounded-[20px] px-5 py-3 text-black font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">

        <slot></slot>

    </button>
</template>

<script setup>

import { computed } from 'vue'

/**
 * 
 */
const props = defineProps({

    modelValue: String,

    label: String,

    modelModifiers: { default: () => ({}) },
    /**
     * 
     */
    name: String,

    type: {
        type: String,
        default: 'button'
    },

    /**
     * 
     */
    placeholder: {
        type: String,
        default: ''
    },

    /**
     * 
     */
    color: {
        type: String,
        default: 'text-white'
    },

    /**
     * 
     */
    bgColor: {
        type: String,
        default: 'bg-primary'
    },

    /**
     * 
     */
    hoverBgColor: {
        type: String,
        default: 'bg-blue-700'
    },

    /**
     * 
     */
    textSize: {
        type: String,
        default: 'text-sm'
    },

    /**
     * 
     */
    disabled: {
        type: Boolean,
        default: false
    }


});


/**
 * 
 */
const buttonClass = computed(() => {

    return props.bgColor + ' hover:' + props.hoverBgColor + ' ' + props.textSize + ' ' + props.color;

});


</script>