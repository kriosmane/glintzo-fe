<template>

    <button :disabled="disabled" :type="type" :class="buttonClass" class="inline-flex items-center rounded-md px-3 py-2 font-semibold shadow-sm ">
        
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