import { shallowMount } from '@vue/test-utils'

import Config from '@/views/Config.vue'

const wrapper = shallowMount(Config)

describe('Config', () => {
  it('is Config a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
