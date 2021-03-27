import { shallowMount } from '@vue/test-utils'

import App from '@/App.vue'
import router from '@/router'

const wrapper = shallowMount(App, {
  global: {
    plugins: [router]
  }
})

describe('App', () => {
  it('is App a vue instance', async () => {
    await router.isReady()
    expect(wrapper.exists()).toBeTruthy()
  })
})
