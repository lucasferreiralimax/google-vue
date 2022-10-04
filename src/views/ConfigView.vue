<script setup>
import DarkMode from '../components/DarkMode.vue'
import ProfileApp from '../components/ProfileApp.vue'
import TranslateSelect from '../components/TranslateSelect.vue'
</script>

<template>
  <form class="App-config">
    <ProfileApp/>
    <h1>{{ $t('text.config') }}</h1>
    <DarkMode/>
    <TranslateSelect/>
    <br/>
    <a
      href="https://github.com/lucasferreiralimax/google-vue"
      rel="noreferrer noopener"
      target="_blank"
    >
      {{ $t('text.github') }}
    </a>
  </form>
</template>

<style lang="scss" scoped>
.App-config {
  padding: 1em;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  input { cursor: pointer; }
  a {
    box-sizing: border-box;
    display: inline-block;
    padding: 1em;
  }
}
</style>
