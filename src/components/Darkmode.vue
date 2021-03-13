<template>
  <button type="button" class='darkmode' aria-label="Toggle darkmode" @click="dark(!darkmode)">
    <svg v-if="type" width="25px" height="25px" viewBox="-5 -5 34 34" fill="var(--main-color)">
      <path v-if="darkmode" d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.929 4.929a1 1 0 011.414 0l.707.707A1 1 0 115.636 7.05l-.707-.707a1 1 0 010-1.414zm14.142 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7 12a5 5 0 1110 0 5 5 0 01-10 0zm-5 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.05 4.95a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-11.314 0a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM12 19a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"/>
      <path v-else d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"/>
    </svg>
    <div v-if="!type">
      <span>Dark Mode</span>
      <input id="darkmode" type="checkbox" :checked="!darkmode" />
    </div>
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Darkmode',
  props: ['type'],
  computed: mapState({
    darkmode: state => state.darkmode,
  }),
  created() {
    this.$store.commit('updateDarkmode', localStorage.getItem("darkmode"))
  },
  methods: {
    dark(type) {
      localStorage.setItem("darkmode", JSON.stringify(type))
      this.$store.commit('updateDarkmode', type)
      if(type) {
        document.documentElement.style.setProperty('--main-color', '#000');
        document.documentElement.style.setProperty('--main-color-rgb', '0,0,0');
        document.documentElement.style.setProperty('--main-color-primary', '#1a73e8');
        document.documentElement.style.setProperty('--main-color-secondary', 'green');
        document.documentElement.style.setProperty('--main-bg-color-primary', '#fff');
        document.documentElement.style.setProperty('--main-bg-color-secondary', '#f2f2f2');
        document.documentElement.style.setProperty('--main-invert', '0');
        document.documentElement.style.setProperty('--logo-filter', 'none');
        document.documentElement.style.setProperty('--input-bg-color', '#fff');
        document.documentElement.style.setProperty('--input-bg-color-hover', '#fff');
        document.documentElement.style.setProperty('--input-drop-shadow', '#20212447');
      } else {
        document.documentElement.style.setProperty('--main-color', '#fff');
        document.documentElement.style.setProperty('--main-color-rgb', '255,255,255');
        document.documentElement.style.setProperty('--main-color-primary', '#1a73e8');
        document.documentElement.style.setProperty('--main-color-secondary', 'green');
        document.documentElement.style.setProperty('--main-bg-color-primary', '#202124');
        document.documentElement.style.setProperty('--main-bg-color-secondary', '#171717');
        document.documentElement.style.setProperty('--main-invert', '1');
        document.documentElement.style.setProperty('--logo-filter', 'grayscale(1) brightness(3)');
        document.documentElement.style.setProperty('--input-bg-color', '#202124');
        document.documentElement.style.setProperty('--input-bg-color-hover', '#303134');
        document.documentElement.style.setProperty('--input-drop-shadow', '#171717');
      }
    }
  }
}
</script>
<style scoped lang="scss">
.darkmode {
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  background: rgba(var(--main-color-rgb), .1);
  border-radius: 6px;
  border: 1px solid rgba(var(--main-color-rgb), .2);
  color: var(--main-color);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 2px;
  &.footer {
    background: rgba(var(--main-color-rgb), .1);
    border: 0;
    outline: none;
    transition: .3s all;
    width: auto;
    &:hover { transform: scale(1.1); }
    &:active { transform: scale(.9); }
    &:focus {
      background: rgba(var(--main-color-rgb), .2);
      transform: scale(1.2);
    }
  }
  div {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    user-select: none;
    width: 100%;
  }
}
</style>

