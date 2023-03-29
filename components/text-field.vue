<template>

    <div>
        <label :for="name" class="block text-sm font-medium leading-6">{{ label }}</label>

        <div class="mt-2">

            <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" :name="name" :id="name" class="block w-full rounded-md border-0 py-2.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" :placeholder="placeholder" />

        </div>

    </div>

</template>

<script setup>

    /**
     * 
     */
    defineProps({

        modelValue:  String,
        label: String,
        modelModifiers: { default: () => ({}) },
        /**
         * 
         */
        name: String,
        type: {
            type : String,
            default: 'text'
        },

        placeholder: {
            type : String,
            default: ''
        }
    });

    defineEmits(['update:modelValue']);
</script>