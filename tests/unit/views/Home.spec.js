import { shallowMount } from '@vue/test-utils'

import Home from '@/views/Home.vue'

const wrapper = shallowMount(Home)

describe('Home', () => {
  it('is Home a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
