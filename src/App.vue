<script setup>
import MenuApp from './components/MenuApp.vue'
import FooterApp from './components/FooterApp.vue'
</script>

<template>
  <div class="App">
    <MenuApp/>
    <router-view/>
    <FooterApp/>
  </div>
</template>

<style lang="scss">
:root {
  --main-color: #000;
  --main-color-rgb: 0,0,0;
  --main-color-primary: #1a73e8;
  --main-color-secondary: green;
  --main-bg-color-primary: #fff;
  --main-bg-color-secondary: #f2f2f2;
  --main-invert: 0;
  --logo-filter: none;
  --input-bg-color: #fff;
  --input-bg-color-hover: #fff;
  --input-drop-shadow: #20212447;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background: var(--main-bg-color-primary);
  color: var(--main-color);
  font-family: Arial;
  margin: 0;
  transition: .3s all;
}

code { font-family: monospace; }

.exit {
  background-color: var(--main-bg-color-primary);
  border: 0;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  right: 5px;
  top: 5px;
}

.icon {
  background: url(//ssl.gstatic.com/inputtools/images/ita_sprite2.png) no-repeat;
  display: block;
  filter: Invert(var(--main-invert));
  font-size: 0;
  height: 14px;
  line-height: 0;
  margin: 0px;
  opacity: .4;
  pointer-events: none;
  width: 14px;
}

.icon-exit { background-position: -668px -18px; }

.App {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 96px);
  justify-content: center;
  @media (max-height: 600px) {
    justify-content: space-between;
    min-height: 600px;
  }
}

.App-link { color: #61dafb; }

a {
  color: var(--main-color);
  text-decoration: none;
  &:hover { color: var(--main-color-primary); }
}

.btn {
  -webkit-tap-highlight-color: transparent;
  background-color: rgba(var(--main-color-rgb),0.05);
  border-radius: 4px;
  border: 0;
  color: var(--main-color);
  cursor: pointer;
  font-family: arial,sans-serif;
  font-size: 14px;
  height: 36px;
  line-height: 27px;
  margin: 11px 4px;
  min-width: 54px;
  outline: none;
  padding: 0 16px;
  text-align: center;
  transition: .3s all;
  user-select: none;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 0 1px rgba(var(--main-color-rgb),0.3);
  }
}
</style>
