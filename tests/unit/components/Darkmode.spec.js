import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import DarkMode from '@/components/DarkMode.vue'
import store from '@/store'
import router from '@/router'

const wrapper = shallowMount(DarkMode, {
  global: {
    plugins: [
      store,
      router
    ]
  }
})

describe('DarkMode', () => {
  it('is DarkMode a vue instance', async () => {
    await router.isReady()
    expect(wrapper.exists()).toBeTruthy()
  })
})
