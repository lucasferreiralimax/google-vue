import { shallowMount } from '@vue/test-utils'

import App from '@/App.vue'
import MenuApp from '@/components/MenuApp.vue'
import FooterApp from '@/components/FooterApp.vue'
import router from '@/router'

const wrapper = shallowMount(App, {
  global: {
    plugins: [router]
  }
})

describe('App', () => {
  beforeAll(async () => {
    await router.isReady()
  })
  it('is App a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('in App a component MenuApp', () => {
    expect(wrapper.getComponent(MenuApp).exists()).toBeTruthy()
  })
  it('in App a component FooterApp', () => {
    expect(wrapper.getComponent(FooterApp).exists()).toBeTruthy()
  })
})
