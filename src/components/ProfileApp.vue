<script setup>
import { ref } from 'vue'
import vClickOutside from '@/directives/clickOutside.js'

const profile = ref(false)
function closeEvent() { profile.value = false }
</script>

<template>
  <section class="App-profile" v-click-outside="closeEvent">
    <h1 @click="profile = !profile">
      2L
      <img src="../assets/sinatra-40x40.jpg" class="App-profile-foto" alt="Foto Frank Sinatra" width="40" height="40" />
    </h1>
    <div class='App-profile__content' :class="{'show': profile}">
      <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">
        <img src="../assets/sinatra-150x150.jpg" class="App-profile-foto big" alt="Foto Frank Sinatra" width="150" height="150" />
      </a>
      <h1>Lucas Lima</h1>
      <h2>lucasferreiralimax@gmail.com</h2>
      <button type="button">{{ $t('profile_component.config') }}</button>
      <div class="divider">
        <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{{ $t('profile_component.politics') }}</a>
        <div class="bullet">•</div>
        <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{{ $t('profile_component.terms') }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.App-profile {
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  left: auto;
  position: fixed;
  right: 1em;
  text-align: center;
  top: 1em;
  z-index: 9;
  & > h1 {
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: rgba(var(--main-color-rgb), .7);
    cursor: pointer;
    display: flex;
    font-family: 'Ultra', serif;
    font-size: 2.5em;
    font-weight: normal;
    justify-content: center;
    margin: 0;
    outline: none;
    user-select: none;
  }
  h1:hover,
  h1:focus,
  h1:active {
    img {
      box-shadow: 0 0 0 1px #fff, 0 0 10px 4px #aaa;
      transform: scale(1.1);
    }
  }
}

.App-profile__content {
  background: var(--main-bg-color-primary);
  border: 1px solid rgba(var(--main-color-rgb), .2);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  box-sizing: border-box;
  color: var(--main-color);
  max-height: calc(100vh - 62px - 100px);
  opacity: 0;
  outline: none;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 8px;
  top: 62px;
  transition: .3s all;
  user-select: none;
  width: 354px;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
  h1, h2 {
    margin: 0;
    font-family: Arial;
  }
  h1 { font-size: 1.2em; }
  h2 { font-size: .9em; }
  button {
    -webkit-tap-highlight-color: transparent;
    background-color: rgba(var(--main-color-rgb), .1);
    border-radius: 100px;
    border: 1px solid rgba(var(--main-color-rgb), .2);
    color: var(--main-color);
    cursor: pointer;
    display: inline-block;
    font: 500 14px/16px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    letter-spacing: .25px;
    margin: 1em 0;
    max-width: 254px;
    outline: 0;
    overflow: hidden;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    &:active {
      background-color: rgba(var(--main-color-rgb), .2);
      border-color: transparent;
      box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15);
    }
  }
  a {
    color: var(--main-color);
    display: inline-block;
    font-size: 12px;
    text-decoration: none;
  }
  .divider {
    align-items: center;
    border-top: 1px solid rgba(var(--main-color-rgb), .1);
    display: flex;
    height: 50px;
    justify-content: center;
  }
  .bullet {
    display: inline-block;
    margin: 0 .5em;
  }
}

.App-profile-foto {
  border-radius: 100px;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(var(--main-color-rgb), .2);
  cursor: pointer;
  height: 40px;
  margin-left: .2em;
  transition: .3s all;
  width: 40px;
  &.big {
    height: 150px;
    margin: 20px 0 15px;
    width: 150px;
  }
}
</style>
