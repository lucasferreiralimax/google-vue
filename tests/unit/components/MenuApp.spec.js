import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import MenuApp from '@/components/MenuApp.vue'
import router from '@/router'

const wrapper = shallowMount(MenuApp, {
  global: {
    plugins: [router]
  }
})

describe('MenuApp', () => {
  it('is MenuApp a vue instance', async () => {
    await router.isReady()
    expect(wrapper.exists()).toBeTruthy()
  })
})
