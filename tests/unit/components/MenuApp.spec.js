import { shallowMount } from '@vue/test-utils'

import MenuApp from '@/components/MenuApp.vue'

const wrapper = shallowMount(MenuApp)

describe('MenuApp', () => {
  it('is MenuApp a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
