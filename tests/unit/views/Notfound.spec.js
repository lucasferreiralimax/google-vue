import { shallowMount } from '@vue/test-utils'

import Notfound from '@/views/Notfound.vue'
import router from '@/router'

const wrapper = shallowMount(Notfound, {
  global: {
    plugins: [router]
  }
})

describe('Notfound', () => {
  it('is Notfound a vue instance', async () => {
    await router.isReady()
    expect(wrapper.exists()).toBeTruthy()
  })
})
