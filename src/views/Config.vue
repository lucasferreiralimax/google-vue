<template>
  <form class="App-config">
    <h1>Configurações</h1>
    <Darkmode />
    <br/>
    <a href="https://github.com/lucasferreiralimax/google-react" target="_blank" rel="noreferrer noopener">Estude o código fonte desse projeto no Github acesse aqui.</a>
  </form>
</template>

<script>
import Darkmode from '@/components/Darkmode'

export default {
  name: 'ConfigApp',
  components: { Darkmode }
}
</script>

<style lang="scss" scoped>
.App-config {
  padding: 1em;
  text-align: center;
  input { cursor: pointer; }
  a {
    box-sizing: border-box;
    display: inline-block;
    padding: 1em;
  }
}
</style>
