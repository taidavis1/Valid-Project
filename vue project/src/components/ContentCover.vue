<script setup>
const props = defineProps({
    header: {
        type: String,
        default: ''
    }
})
</script>

<template>
	<div class="w-full mt-14">
        <h3 class="text-3xl font-medium text-header">{{ header }}</h3>
        <div class="text-content">
            <slot/>
        </div>
    </div>
</template>
