import { shallowMount } from '@vue/test-utils'

import Notfound from '@/views/Notfound.vue'

const wrapper = shallowMount(Notfound)

describe('Notfound', () => {
  it('is Notfound a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
