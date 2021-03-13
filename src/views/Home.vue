<template>
  <div class="home">
    <HeaderApp/>
    <SearchApp/>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp'
import SearchApp from '@/components/SearchApp'

export default {
  name: 'Home',
  components: { HeaderApp, SearchApp}
}
</script>
