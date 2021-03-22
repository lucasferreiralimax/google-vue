import { shallowMount } from '@vue/test-utils'

import App from '@/App.vue'

const wrapper = shallowMount(App)

describe('App', () => {
  it('is App a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
