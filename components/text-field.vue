<template>
    <div>
        <label :for="name" class="block text-sm font-medium leading-6 text-[#02145A]">{{ label }}</label>

        <div :class="prependIcon ? 'relative rounded-md shadow-sm' : ''" class="mt-1">

            <div v-if="prependIcon" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">

                <svg-icon class="text-gray-400" type="mdi" :path="prependIcon"></svg-icon>

            </div>

            <input :required="required" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                :type="type" :name="name" :id="name"
                class="block w-full rounded-md border-0 py-2.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-dark-blue sm:text-sm sm:leading-6"
                :class="prependIcon ? ' pl-10 ' : ''" :placeholder="placeholder" />

        </div>

    </div>
</template>

<script setup>

import SvgIcon from '@jamescoyle/vue-icon'

/**
 * 
 */
defineProps({

    modelValue: String,

    label: String,

    modelModifiers: { default: () => ({}) },
    /**
     * 
     */
    name: String,

    type: {
        type: String,
        default: 'text'
    },

    /**
     * 
     */
    placeholder: {
        type: String,
        default: ''
    },

    prependIcon: {
        type: String,
        default: null
    },


    required: {
        type: Boolean,
        default: false
    }
});

defineEmits(['update:modelValue']);
</script>