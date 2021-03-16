<template>
  <div class="home">
    <Profile/>
    <HeaderApp/>
    <SearchApp/>
    <Keyboard/>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import HeaderApp from '@/components/HeaderApp'
import SearchApp from '@/components/SearchApp'
import Keyboard from '@/components/Keyboard'

export default {
  name: 'Home',
  components: {
    Profile,
    HeaderApp,
    SearchApp,
    Keyboard
  }
}
</script>
