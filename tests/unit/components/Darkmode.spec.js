import { shallowMount } from '@vue/test-utils'

import Darkmode from '@/components/Darkmode.vue'
import store from '@/store'
import router from '@/router'

const wrapper = shallowMount(Darkmode, {
  global: {
    plugins: [
      store,
      router
    ]
  }
})

describe('Darkmode', () => {
  it('is Darkmode a vue instance', async () => {
    await router.isReady()
    expect(wrapper.exists()).toBeTruthy()
  })
})
