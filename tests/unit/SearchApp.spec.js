import { shallowMount } from '@vue/test-utils'

import SearchApp from '@/components/SearchApp.vue'

import store from '@/store'

const wrapper = shallowMount(SearchApp, {
  global: {
    plugins: [store]
  }
})

describe('SearchApp', () => {
  it('is SearchApp a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
