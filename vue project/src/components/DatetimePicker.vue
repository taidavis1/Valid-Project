<template>
    <VueDatePicker
        range 
        :partial-range="false" 
        v-model="date"
        :min-date="new Date()"
        placeholder="Ngày giờ trả phòng"
        :is24="false"
        :enable-time-picker="true"
    />
</template>
  
<script setup>
  import { ref } from 'vue';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  const date = ref();
</script>