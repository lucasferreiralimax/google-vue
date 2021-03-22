<template>
  <Profile/>
  <HeaderApp/>
  <SearchApp/>
  <Keyboard/>
  <Voice/>
</template>

<script>
import Profile from '@/components/Profile'
import HeaderApp from '@/components/HeaderApp'
import SearchApp from '@/components/SearchApp'
import Keyboard from '@/components/Keyboard/Keyboard'
import Voice from '@/components/Voice'

export default {
  name: 'Home',
  components: {
    Profile,
    HeaderApp,
    SearchApp,
    Keyboard,
    Voice
  }
}
</script>
