<script setup>
import DarkMode from './DarkMode.vue'
</script>

<template>
  <footer class="App-footer">
    <div>
      <h2 class="brasil">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" widht="25px" height="25px">
          <circle cx="256" cy="256" r="256" fill="#6da544"/>
          <path fill="#ffda44" d="M256 100.174L467.478 256 256 411.826 44.522 256z"/>
          <circle cx="256" cy="256" r="89.043" fill="#f0f0f0"/>
          <g fill="#0052b4">
            <path d="M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 001.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0137.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"/>
          </g>
        </svg>
        Brasil
      </h2>
      <DarkMode type="footer" />
    </div>
    <hr class="divider" />
    <div>
      <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener"><strong>@lucasferreiralimax</strong></a>
      <router-link to="/config">{{ $t('text.config') }}</router-link>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.App-footer {
  align-items: center;
  background: var(--main-bg-color-secondary);
  border-top: 1px solid rgba(var(--main-color-rgb), .1);
  bottom: 0;
  box-sizing: border-box;
  color: rgba(var(--main-color-rgb), .6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 10px 0 15px;
  position: absolute;
  text-align: center;
  transition: .5s background;
  width: 100%;
  z-index: 9;
  @media (max-height: 600px) {
    position: relative;
  }
  & > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 20px);
  }
  .brasil {
    align-items: center;
    display: flex;
    font-size: 1em;
    font-weight: normal;
    justify-content: center;
    margin: 0;
    pointer-events: none;
    svg { margin-right: .5em; }
  }
  a {
    color: inherit;
    font-size: .9em;
    text-decoration: none;
    transition: .3s all;
    &:hover { color: rgb(var(--main-color-primary)); }
  }
}

.divider {
  border: 0 solid transparent;
  border-top: 1px solid rgba(255,255,255,.1);
  box-shadow: 0 1px 0 rgba(0,0,0,.1);
  margin-bottom: 1em;
  width: 100%;
}
</style>
