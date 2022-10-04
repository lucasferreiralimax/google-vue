import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Notfound from '@/views/NotFoundView.vue'
import router from '@/router'

const wrapper = shallowMount(Notfound, {
  global: {
    plugins: [router]
  }
})

describe('Notfound', () => {
  it('is Notfound a vue instance', async () => {
    await router.isReady()
    expect(wrapper.exists()).toBeTruthy()
  })
})
