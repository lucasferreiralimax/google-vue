<script setup>
import { ref } from 'vue'
import vClickOutside from '@/directives/clickOutside.js'

const profile = ref(false)
function closeEvent() { profile.value = false }
</script>

<template>
  <section class="App-profile" v-click-outside="closeEvent">
    <p @click="profile = !profile">
      <span>@lucasferreiralimax</span>
      <img src="../assets/sinatra-40x40.jpg" class="App-profile-foto" alt="Foto Frank Sinatra" width="40" height="40" />
    </p>
    <div class='App-profile__content' :class="{'show': profile}">
      <p class="email">lucasferreiralimax@gmail.com</p>
      <button class="btn-close" aria-label="Close menu" @click="profile = false">
        <svg width="22" height="22" viewBox="1 1 22 22" focusable="false" fill="var(--main-color)">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </button>
      <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">
        <img src="../assets/sinatra-150x150.jpg" class="App-profile-foto big" alt="Foto Frank Sinatra" width="150" height="150" />
      </a>
      <p class="title">Lucas Lima</p>
      <button class="btn" type="button">{{ $t('profile_component.config') }}</button>
      <div class="divider">
        <a class="link" href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{{ $t('profile_component.politics') }}</a>
        <div class="bullet">•</div>
        <a class="link" href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{{ $t('profile_component.terms') }}</a>
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
  & > p {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    font-size: 0;
    user-select: none;
  }
  &:hover, &:focus, &:active {
    & > p img {
      box-shadow: 0 0 0 1px #fff, 0 0 0px 4px #eee;
      transform: scale(1.1);
    }
  }
}

.App-profile__content {
  background: var(--main-bg-color-profile);
  border-radius: 28px;
  border: 1px solid rgba(var(--main-color-rgb),0.15);
  box-shadow: 0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3);;
  box-sizing: border-box;
  color: var(--main-color);
  max-height: calc(100vh - 62px - 100px);
  opacity: 0;
  outline: none;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 8px;
  top: 42px;
  transition: .3s all;
  user-select: none;
  width: 354px;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
  p {
    font-size: .9em;
    margin: 0;
    font-family: Arial;
  }
  .email { margin-top: 1.5rem; }
  .title { font-size: 1.375rem; }
  .btn {
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    border-radius: 100px;
    border: 1px solid var(--main-border-color);
    color: rgb(var(--main-color-primary));
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
    &:hover,
    &:active {
      background-color: rgba(var(--main-color-primary), .1);
      box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15);
    }
  }
  .btn-close {
    position: absolute;
    background: none;
    border-radius: 50%;
    border: 1px solid transparent;
    color: #444746;
    cursor: pointer;
    height: 40px;
    width: 40px;
    outline: 0;
    padding: 8px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 2;
    &:hover {
      background: rgba(68,71,70,.08);
    }
  }
  a.link {
    color: var(--main-color);
    display: inline-block;
    font-size: 12px;
    text-decoration: none;
    max-width: 350px;
    padding: 5px 4px;
    letter-spacing: .1px;
    font-size: .75rem;
    line-height: 1rem;
    position: relative;
    vertical-align: text-top;
    border-radius: 4px;
    &:hover {
      background: rgba(var(--main-color-rgb), .1);
    }
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
  cursor: pointer;
  height: 32px;
  width: 32px;
  margin-left: .2em;
  transition: .3s all;
  &.big {
    height: 80px;
    width: 80px;
    margin: 20px 0 15px;
  }
}
</style>
