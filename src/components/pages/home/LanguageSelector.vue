<template>
  <div class="language-selector">
    <h3 @click="toggleDropdown" :style="{ color: putSecondary ? secondaryColor : '' }">{{ currentLanguage }}</h3>
    <transition name="dropdown" @enter="beforeEnter" @after-enter="afterEnter" @leave="beforeLeave">
      <ul v-if="dropdownVisible" class="dropdown">
        <li
            :style="{ color: putSecondary ? secondaryColor : '' }"
            v-for="lang in availableLanguages"
            :key="lang"
            @click="changeLanguage(lang)"
        >
          <h4>{{ lang }}</h4>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { defineProps } from 'vue';

const props = defineProps({
  secondaryColor: {
    type: String,
    default: 'var(--pantone-2726C)',
  },
  putSecondary: {
    type: Boolean,
    default: false,
  },
});

const { locale } = useI18n({ useScope: 'global' });
const languages = ref(['EN', 'ES', 'FR', 'DE', 'IT', 'PT', 'RU', 'ZH']);
const currentLanguage = ref(locale.value.toUpperCase());
const dropdownVisible = ref(false);

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const changeLanguage = (lang) => {
  console.log('Changing language to:', lang);
  console.log('Before change - locale:', locale.value, 'currentLanguage:', currentLanguage.value, 'dropdownVisible:', dropdownVisible.value);

  locale.value = lang.toLowerCase();
  localStorage.setItem('language', lang.toLowerCase());

  console.log('After change - locale:', locale.value, 'currentLanguage:', currentLanguage.value, 'dropdownVisible:', dropdownVisible.value);
};

watch(locale, (newLocale) => {
  currentLanguage.value = newLocale.toUpperCase();
});

const availableLanguages = computed(() =>
    languages.value.filter(lang => lang !== currentLanguage.value)
);

const beforeEnter = (el) => {
  el.style.height = '0';
};

const afterEnter = (el) => {
  el.style.height = el.scrollHeight + 'px';
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px';
  requestAnimationFrame(() => {
    el.style.height = '0';
  });
};
</script>

<style scoped>
.language-selector {
  position: relative;
  display: inline-block;
}

h3:hover {
  color: var(--background-lighter) !important;
}

h3 {
  color: var(--color-text);
  cursor: pointer;
  user-select: none;
  text-align: center;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: var(--background-soft);
  border-radius: 7px;
  overflow: hidden;
  transition: height 0.3s ease-out;
  text-align: center;
}

.dropdown li {
  cursor: pointer;
  padding: 5px 14px;
  user-select: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
}

.dropdown li:hover {
  filter: brightness(1.05);
  background-color: var(--background-lighter);
}

.language-selector h3 {
  width: 50px;
  display: inline-block;
}

@keyframes scale-up {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.07);
  }
}

.language-selector h3:hover {
  color: var(--background-lighter) !important;
  animation: scale-up 0.3s forwards;
}
</style>