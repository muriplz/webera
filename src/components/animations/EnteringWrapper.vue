<script setup>
import EnteringText from "@/components/animations/EnteringText.vue";
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);
const animatedDiv = ref(null);
let observer;

onMounted(() => {
  if (animatedDiv.value) {
    observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.3, // Trigger when 30% of the element is visible
    });

    observer.observe(animatedDiv.value);
  }
});

onBeforeUnmount(() => {
  if (observer && animatedDiv.value) {
    observer.unobserve(animatedDiv.value);
  }
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    isVisible.value = entry.intersectionRatio >= 0.99;
  });
}
</script>

<template>
  <div ref="animatedDiv" class="animated-div-wrapper">
    <transition name="fade-slide">
      <div v-show="isVisible" class="wrapper">
        <EnteringText>
          <slot></slot>
        </EnteringText>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.wrapper {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>