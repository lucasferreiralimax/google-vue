import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Voice from '@/components/VoiceApp.vue'

import store from '@/store'

const wrapper = shallowMount(Voice, {
  global: {
    plugins: [store]
  }
})

describe('Voice', () => {
  it('is Voice a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
