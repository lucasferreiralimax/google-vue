import { shallowMount } from '@vue/test-utils'

import FooterApp from '@/components/FooterApp.vue'
import Darkmode from '@/components/Darkmode'
import router from '@/router'

const wrapper = shallowMount(FooterApp, {
  global: {
    plugins: [router]
  }
})

describe('FooterApp', () => {
  beforeAll(async () => {
    await router.isReady()
  })
  it('is FooterApp a vue instance', async () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('in FooterApp a component Darkmode', () => {
    expect(wrapper.getComponent(Darkmode).exists()).toBeTruthy()
  })
  it('in FooterApp with text Brasil and svg', () => {
    expect(wrapper.find('.brasil svg').exists()).toBeTruthy()
    expect(wrapper.find('.brasil').text()).toBe('Brasil')
  })
  it('valid url for github @lucasferreiralimax', () => {
    expect(
      wrapper
        .find('a:nth-of-type(1)')
        .attributes('href')
      ).toBe('https://github.com/lucasferreiralimax')
  })
})
