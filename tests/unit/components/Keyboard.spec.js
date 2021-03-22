import { shallowMount } from '@vue/test-utils'

import Keyboard from '@/components/Keyboard/Keyboard.vue'

import store from '@/store'

const wrapper = shallowMount(Keyboard, {
  global: {
    plugins: [store]
  }
})

describe('Keyboard', () => {
  it('is Keyboard a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
