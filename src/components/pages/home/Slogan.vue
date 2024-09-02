// src/components/pages/home/Slogan.vue
<script setup>
import EnteringText from "@/components/animations/EnteringText.vue";
import EnteringWrapper from "@/components/animations/EnteringWrapper.vue";
</script>

<template>
  <EnteringWrapper>
    <h3 class="slogan">{{ $t('slogan') }}</h3>
  </EnteringWrapper>
</template>

<style scoped>
.slogan {
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-text);
}
</style>