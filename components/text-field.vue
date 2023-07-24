<template>
    <div>
        <label :for="name" class="block text-sm font-medium leading-6 text-[#02145A]">{{ label }}</label>

        <div :class="prependIcon ? 'relative rounded-md shadow-sm' : ''" class="mt-1">

            <div v-if="prependIcon" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">

                <svg-icon class="text-gray-400" type="mdi" :path="prependIcon"></svg-icon>

            </div>

            <input :required="required" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                :type="type" :name="name" :id="name" @change="validator.$touch" @blur="validator.$touch" :class="inputClass"
                :placeholder="placeholder" />
        </div>


        <span class="text-xs text-red-500" v-if="validator.$error">{{
            validator.$errors[0].$message
        }}</span>


    </div>
</template>

<script setup>

import SvgIcon from '@jamescoyle/vue-icon'

/**
 * 
 */
const props = defineProps({

    modelValue: String,

    label: String,

    validator: {
        type: Object,
        default: () => ({})
    },


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


const inputClass = computed(() => {

    return {
        'block w-full rounded-md border-0 py-2.5 shadow-sm ring-1 ring-inset  sm:text-sm sm:leading-6': true,
        'pl-10': props.prependIcon,
        'ring-gray-300  placeholder:text-gray-400 focus:ring-dark-blue': !props.validator.$error,
        'ring-red-500 focus:ring-red-500': props.validator.$error
    }
});

const test = () => {
    console.log('test');
}

</script>