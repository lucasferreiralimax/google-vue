<template>
  <form class="App-config">
    <Profile/>
    <h1>{{ $t('text.config') }}</h1>
    <Darkmode />
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

<script>
import Darkmode from '@/components/Darkmode'
import Profile from '@/components/Profile'
import TranslateSelect from '@/components/TranslateSelect'

export default {
  name: 'ConfigApp',
  components: { Darkmode, Profile, TranslateSelect }
}
</script>

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
