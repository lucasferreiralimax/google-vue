<template>
  <header class="App-header">
    <h1>{{ $t('text.GodIsBig') }}</h1>
    <img src='../assets/logo.svg' class="App-logo" :alt="$t('alt.LogoGoogle')" width="272" height="92" />
    <h2><a href="https://v3.vuejs.org" target="_blank" rel="noreferrer noopener">Vue.js</a></h2>
  </header>
</template>

<style lang="scss">
.App-header {
  align-items: center;
  color: #000;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  &:hover h1 {
    opacity: 1;
    transform: scale(1) translateY(-200%);
  }
  h1, h2 {
    position: absolute;
    top: 0;
  }
  h1 {
    color: #fff;
    cursor: none;
    opacity: 0;
    position: absolute;
    text-shadow: 0 0 150px #000, 0 0 100px #ff0, 0 0 50px #0f0, 0 -2px 15px #0f0;
    transform-origin: bottom;
    transform: scale(0) translateY(0);
    transition: .5s opacity, 1s transform;
    user-select: none;
  }
  h2 { transform: translateY(-35px); }
  a {
    color: var(--main-color);
    font-size: 12px;
    font-weight: normal;
    margin: 0;
    padding: 0;
    position: absolute;
    text-decoration: none;
    top: 5px;
    transform: translateX(100px);
    user-select: none;
    &:hover { color: rgb(var(--main-color-primary)); }
  }
}

.App-logo {
  cursor: pointer;
  filter: var(--logo-filter);
  outline: none;
  transition: .3s transform;
  user-select: none;
  &:hover { transform: scale(1.05); }
  &:active,
  &:focus {
    transform: scale(0.94);
  }
}
</style>
