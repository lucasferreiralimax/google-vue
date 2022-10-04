import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Login from '@/views/LoginView.vue'

const wrapper = shallowMount(Login)

describe('Login', () => {
  it('is Login a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
