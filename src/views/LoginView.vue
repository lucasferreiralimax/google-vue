<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
const user = ref('lucasferreiralimax@gmail.com')
const error = ref(false)

watch(user, (newVal) => { error.value = newVal ? false : true })

function submitLogin() { error.value = !user.value }
</script>

<template>
  <form class="App-login">
    <img src='../assets/logo.svg' class="App-logo" alt="logo Google" width="75" />
    <h1>{{ t('login.title') }}</h1>
    <p>{{ t('login.description') }}</p>
    <div class='App-login-control' :class="{'placeholder': user, 'error': error}">
      <input id="user" type="text" class="App-login-input" v-model="user" />
      <label for="user" class="App-login-label">{{ t('login.form_email.label') }}</label>
      <div class="App-login-error" v-if="error">
        <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
        </svg>
        {{ t('login.form_email.error') }}
      </div>
    </div>
    <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{{ t('login.remember') }}</a>
    <p>{{ t('login.text') }} <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noreferrer noopener">{{ t('login.text_more') }}</a></p>
    <button type="button" class="App-login-new btn">{{ t('login.new') }}</button>
    <button type="button" class="App-login-next btn primary" @click="submitLogin">{{ t('login.next') }}</button>
  </form>
</template>

<style scoped lang="scss">
@font-face {
  font-family: 'Google Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Google Sans Regular'),
       local('GoogleSans-Regular'),
       url(//fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Kwp5MKg.woff2)
       format('woff2');
  unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
}

@font-face{
  font-family:'Google Sans';
  font-style:normal;
  font-weight:500;
  src:local('Google Sans Medium'),
      local('GoogleSans-Medium'),
      url(//fonts.gstatic.com/s/googlesans/v14/4UabrENHsxJlGDuGo1OIlLU94Yt3CwZ-Pw.woff2)
      format('woff2');
  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
}

.App-login {
  border-radius: 8px;
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100%;
  padding: 48px 40px 36px;
  position: relative;
  width: 100%;
  z-index: 1;
  @media (min-width: 601px) {
    border: 1px solid rgba(var(--main-color-rgb), .2);
    max-width: 450px;
    min-height: 500px;
  }
  @media (max-height: 600px) {
    border: 0;
  }
  h1 {
    color: var(--main-color);
    font-family: 'Google Sans','Noto Sans Myanmar UI',arial,sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.3333;
  }
  h1, p:nth-of-type(1) {
    text-align: center;
  }
  img {
    display: block;
    margin: 0 auto;
  }
  a {
    color: rgb(var(--main-color-primary));
    font-weight: 500;
    letter-spacing: .25px;
    text-decoration: none;
  }
  .btn {
    background-color: rgba(var(--main-color-rgb),0.05);
    color: var(--main-color);
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 500;
    letter-spacing: .0107142857em;
    padding: 0 24px 0 24px;
    text-transform: none;
    &:hover { box-shadow: 0 0 0 1px rgba(var(--main-color-rgb),0.3); }
    &.primary {
      background: var(--main-color-primary);
      color: #fff;
      float: right;
      &:hover { background: #1c5fba; }
    }
  }
}

%placeholder-label {
  background: var(--main-bg-color-primary);
  height: 25px;
  padding: 0 4px;
  top: 5px;
  transform: scale(.75) translateX(-35px);
}

.App-login-control {
  position: relative;
  &.error .App-login-label {
    color: #d93025;
  }
  &.error .App-login-input {
    border-color: #d93025;
    box-shadow: 0 0 0 1px #d93025;
  }
  &.placeholder .App-login-label {
    @extend %placeholder-label;
  }
}

.App-login-label {
  bottom: 17px;
  box-sizing: border-box;
  color: #80868b;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  left: 18px;
  line-height: 0;
  pointer-events: none;
  position: absolute;
  top: 36px;
  transition: .15s top, .15s transform;
}

.App-login-input {
  background: var(--main-bg-color-primary);
  border-radius: 4px;
  border: 1px solid rgba(var(--main-color-rgb), .2);
  box-sizing: border-box;
  color: var(--main-color);
  font-size: 16px;
  margin: 10px 0;
  padding: 15px;
  transition: .3s all;
  width: 100%;
  &:focus {
    border-color: rgb(var(--main-color-primary));
    box-shadow: 0 0 0 1px var(--main-color-primary);
    outline: none;
    & + .App-login-label {
      @extend %placeholder-label;
    }
  }
}

.App-login-error {
  color: #d93025;
  font-size: 12px;
  margin-bottom: 1em;
  svg {
    fill: #d93025;
    margin-right: 8px;
    transform: translateY(2px);
  }
}
</style>
