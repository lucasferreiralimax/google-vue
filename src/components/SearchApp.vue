<template>
  <section class="App-search">
    <label class="label-search">
      Pesquise ou digite uma URL
      <svg class="icon-search" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
      <input class="App-search-input" type="text" placeholder="Pesquise no Google ou digite um URL" @input="search = $event.target.value">
    </label>
    <button type="button" class='btn clean'>
      <svg class="icon-clean" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#999"></path></svg>
      <span>Limpar</span>
    </button>
    <button type="button" class="btn keyboard">
      <img src='../assets/keyboard.png' class="icon-keyboard" alt="Icone Teclado" />
      <span>Teclado virtual</span>
    </button>
    <button type="button" class="btn voice">
      <svg class="icon-voice" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path><path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path><path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path><path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path></svg>
      <span>Buscar por voz</span>
    </button>
    <button type="button" class="btn search" @click="searchGoogle()">
      Pesquisa Google
    </button>
    <button type="button" class="btn lucky">
      Estou com sorte
    </button>
  </section>
</template>

<script>
export default {
  name: 'SearchApp',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    searchGoogle() {
      if(this.search) window.location = `https://www.google.com.br/search?&q=${this.search}`;
    }
  }
}
</script>

<style lang="scss" scoped>

.App-search {
  margin: 0 auto;
  max-width: 582px;
  position: relative;
  text-align: center;
  width: calc(100% - 50px);
  .icon-search,
  .icon-clean,
  .icon-voice {
    width: 25px;
  }
  .icon-search {
    fill: var(--main-color);
    left: 12px;
    opacity: 0.45;
    pointer-events: none;
    position: absolute;
    top: 12px;
    width: 20px;
  }
  .label-search { font-size: 0; }
}

.App-search-input {
  background: var(--input-bg-color);
  border-radius: 100px;
  border: 1px solid rgba(var(--main-color-rgb),0.15);
  box-sizing: border-box;
  color: var(--main-color);
  margin-bottom: 20px;
  outline: none;
  overflow: hidden;
  padding: 15px 130px 15px 40px;
  text-overflow: ellipsis;
  transition: .2s all;
  white-space: pre;
  width: 100%;
  &:hover,
  &:focus {
    background: var(--input-bg-color-hover);
    border-color: rgba(223,225,229,0);
    box-shadow: 0 1px 6px 0 var(--input-drop-shadow);
  }
}

.App-search .btn {
  &.keyboard, &.clean, &.voice {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    font-size: 0;
    height: 47px;
    justify-content: center;
    margin: 0;
    min-width: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 47px;
  }
  &.keyboard { right: 45px; }
  &.voice { right: 5px; }
  &.keyboard, &.voice {
    &:hover, &:focus, &:active {
      box-shadow: none;
      transform: scale(1.2);
    }
  }
  &.clean {
    opacity: 0;
    pointer-events: none;
    right: 90px;
    &:hover, &:focus, &:active {
      box-shadow: none;
    }
    &:hover svg, &:focus svg, &:active svg {
      transform: scale(1.2);
    }
    &:after {
      background: rgba(var(--main-color-rgb),.2);
      content: '';
      display: block;
      height: 60%;
      transform: translateX(10px);
      width: 1px;
    }
    &.active {
      opacity: 1;
      pointer-events: all;
    }
    svg { transition: .3s all; }
  }
}

@media only screen and (max-width: 900px) {
  .App-search .btn.keyboard { display: none; }
  .App-search .btn.clean { right: 50px; }
  .App-search-input { padding: 15px 80px 15px 40px; }
}
</style>
