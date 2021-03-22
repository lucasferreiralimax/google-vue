import { shallowMount } from '@vue/test-utils'

import FooterApp from '@/components/FooterApp.vue'

const wrapper = shallowMount(FooterApp)

describe('FooterApp', () => {
  it('is FooterApp a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
