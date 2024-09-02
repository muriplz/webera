<template>
  <div class="language-selector">
    <h3 @click="toggleDropdown">{{ currentLanguage }}</h3>
    <ul v-if="dropdownVisible" class="dropdown">
      <li
          v-for="lang in availableLanguages"
          :key="lang"
          @click="changeLanguage(lang)"
      >
        <h4>{{ lang }}</h4>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const languages = ref(['EN', 'ES']);
const currentLanguage = ref(locale.value.toUpperCase());
const dropdownVisible = ref(false);

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const changeLanguage = (lang) => {
  locale.value = lang.toLowerCase();
  currentLanguage.value = lang;
  dropdownVisible.value = false;
};

const availableLanguages = computed(() =>
    languages.value.filter(lang => lang !== currentLanguage.value)
);
</script>

<style scoped>
.language-selector {
  position: relative;
  display: inline-block;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

h2, h3 {
  color: var(--color-text);
  cursor: pointer;
  user-select: none;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.dropdown li {
  cursor: pointer;
  padding: 5px 14px;
  user-select: none;
}

.language-selector h3 {
  width: 50px;
  text-align: center;
  display: inline-block;
}
</style>