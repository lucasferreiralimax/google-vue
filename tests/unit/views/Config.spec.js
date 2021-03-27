import { shallowMount } from '@vue/test-utils'

import Config from '@/views/Config.vue'
import Darkmode from '@/components/Darkmode'
import Profile from '@/components/Profile'

const wrapper = shallowMount(Config)

describe('Config', () => {
  it('is Config a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('in Config a component Darkmode', () => {
    expect(wrapper.getComponent(Darkmode).exists()).toBeTruthy()
  })
  it('in Config a component Profile', () => {
    expect(wrapper.getComponent(Profile).exists()).toBeTruthy()
  })
  it('valid url for github google-vue', () => {
    expect(
      wrapper
        .find('a')
        .attributes('href')
      ).toBe('https://github.com/lucasferreiralimax/google-vue')
  })
})
