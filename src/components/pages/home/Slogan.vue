// src/components/pages/home/Slogan.vue
<script setup>
import EnteringWrapper from "@/components/animations/EnteringWrapper.vue";
</script>

<template>
  <EnteringWrapper class="wrapper">
    <h3 class="slogan">{{ $t('slogan') }}</h3>
  </EnteringWrapper>
</template>

<style scoped>
.slogan {
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-text);
}

.wrapper {
  background-color: var(--pantone-2726C);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>