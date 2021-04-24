<template>
  <select class="App-language" v-model="locale">
    <option
      v-for="optionLocale in supportLocales"
      :key="`locale-${optionLocale}`"
      :value="optionLocale">{{ optionLocale }}
    </option>
  </select>
</template>

<script>
import { defineComponent, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES, setI18nLanguage } from '../i18n';
export default defineComponent({
  name: 'TranslateSelect',
  setup() {
    const { t, locale } = useI18n({ useScope: 'global' });
    watch(locale, (val) => {
      setI18nLanguage(val);
    });
    return {
      t, locale, supportLocales: SUPPORT_LOCALES,
    };
  },
});
</script>

<style lang="scss">
.App-language {
  margin: 1rem;
  padding: 0.8rem;
  border-radius: 6px;
}
</style>
