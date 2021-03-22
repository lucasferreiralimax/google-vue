import { shallowMount } from '@vue/test-utils'

import Profile from '@/components/Profile.vue'

const wrapper = shallowMount(Profile)

describe('Profile', () => {
  it('is Profile a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
