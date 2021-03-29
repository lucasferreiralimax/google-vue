<template>
  <section class="App-notfound">
    <router-link to="/">
      <span id="logo" aria-label="Google"></span>
    </router-link>
    <p><b>404.</b> Esse é um erro.</p>
    <br/>
    <p>O URL <b class="highlight">{{ url }}</b> solicitado não foi encontrado. Isso é tudo que sabemos.</p>
  </section>
</template>

<script>
import { ref, onUnmounted } from 'vue'

export default {
  name: 'NotfoundApp',
  setup() {
    const url = ref(window.location.pathname)
    document.body.classList.add('notfound')

    onUnmounted(() => {
      document.body.classList.remove('notfound')
    })

    return { url }
  }
}
</script>

<style lang="scss">
body.notfound {
  background: var(--main-bg-color-primary) url('../assets/robot.png') 80% 30% no-repeat;
}

.App-notfound {
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100%;
  padding: 58px 10px 36px 30px;
  position: relative;
  z-index: 1;
  @media (min-width: 601px) {
    min-height: auto;
    padding: 0;
  }
  .highlight { color: var(--main-color-secondary); }
  p { margin: 0; }
  a {
    box-sizing: border-box;
    display: inline-block;
  }
}

#logo {
  background: url('../assets/logo.svg') no-repeat;
  background-size: contain;
  display: inline-block;
  height: 54px;
  width: 150px;
}
</style>
