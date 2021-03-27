import { shallowMount } from '@vue/test-utils'

import FooterApp from '@/components/FooterApp.vue'
import router from '@/router'

const wrapper = shallowMount(FooterApp, {
  global: {
    plugins: [router]
  }
})

describe('FooterApp', () => {
  it('is FooterApp a vue instance', async () => {
    await router.isReady()
    expect(wrapper.exists()).toBeTruthy()
  })
})
