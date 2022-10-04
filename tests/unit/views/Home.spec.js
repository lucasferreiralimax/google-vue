import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Home from '@/views/HomeView.vue'
import Profile from '@/components/ProfileApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import SearchApp from '@/components/SearchApp.vue'
import Keyboard from '@/components/Keyboard/KeyboardApp.vue'
import Voice from '@/components/VoiceApp.vue'

const wrapper = shallowMount(Home)

describe('Home', () => {
  it('is Home a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('in Home a component Profile', () => {
    expect(wrapper.getComponent(Profile).exists()).toBeTruthy()
  })
  it('in Home a component HeaderApp', () => {
    expect(wrapper.getComponent(HeaderApp).exists()).toBeTruthy()
  })
  it('in Home a component SearchApp', () => {
    expect(wrapper.getComponent(SearchApp).exists()).toBeTruthy()
  })
  it('in Home a component Keyboard', () => {
    expect(wrapper.getComponent(Keyboard).exists()).toBeTruthy()
  })
  it('in Home a component Voice', () => {
    expect(wrapper.getComponent(Voice).exists()).toBeTruthy()
  })
})
