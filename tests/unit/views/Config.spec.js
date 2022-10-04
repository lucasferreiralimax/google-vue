import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Config from '@/views/ConfigView.vue'
import DarkMode from '@/components/DarkMode.vue'
import Profile from '@/components/ProfileApp.vue'

const wrapper = shallowMount(Config)

describe('Config', () => {
  it('is Config a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('in Config a component DarkMode', () => {
    expect(wrapper.getComponent(DarkMode).exists()).toBeTruthy()
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
