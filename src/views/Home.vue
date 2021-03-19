<template>
  <Profile/>
  <HeaderApp/>
  <SearchApp/>
  <Keyboard/>
</template>

<script>
import Profile from '@/components/Profile'
import HeaderApp from '@/components/HeaderApp'
import SearchApp from '@/components/SearchApp'
import Keyboard from '@/components/Keyboard/Keyboard'

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
