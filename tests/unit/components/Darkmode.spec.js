import { shallowMount } from '@vue/test-utils'

import Darkmode from '@/components/Darkmode.vue'
import store from '@/store'

const wrapper = shallowMount(Darkmode, {
  global: {
    plugins: [store]
  }
})

describe('Darkmode', () => {
  it('is Darkmode a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
