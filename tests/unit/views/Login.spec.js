import { shallowMount } from '@vue/test-utils'

import Login from '@/views/Login.vue'

const wrapper = shallowMount(Login)

describe('Login', () => {
  it('is Login a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
