// src/App.vue
<template>
  <LoadingSpinner v-if="loading" />
  <div v-else>
    <router-view/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

const loading = ref(true);

onMounted(() => {
  window.addEventListener('load', () => {
    loading.value = false;
  });
});
</script>