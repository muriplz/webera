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
    isVisible.value = entry.isIntersecting;
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
  background-color: var(--background-soft);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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