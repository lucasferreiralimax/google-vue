<template>
  <div class="home">
    <Profile/>
    <HeaderApp/>
    <SearchApp/>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import HeaderApp from '@/components/HeaderApp'
import SearchApp from '@/components/SearchApp'

export default {
  name: 'Home',
  components: {
    Profile,
    HeaderApp,
    SearchApp
  }
}
</script>
