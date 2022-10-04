import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Keyboard from '@/components/Keyboard/KeyboardApp.vue'
import noKeysChar from '@/components/Keyboard/utils'
import store from '@/store'

let wrapper;
let keys_mock = ['\'', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '´', '[', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '~', ']', 'shift 1', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ';', 'shift 2', 'Ctrl+Alt', 'whitespace', 'Ctrl+Alt']
let keys_mock_shift = ['"', '!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '_', '+', 'backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '`', '{', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '^', '}', 'shift 1', '\|', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', ':', 'shift 2', 'Ctrl+Alt', 'whitespace', 'Ctrl+Alt']
let keys_mock_ctrl_alt = ['\'', '¹', '²', '³', '£', '¢', '¬', '7', '8', '9', '0', '-', '§', 'backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '´', 'ª', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '~', 'º', 'shift 1', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ';', 'shift 2', 'Ctrl+Alt', 'whitespace', 'Ctrl+Alt']

function keyMockCheck(wrapper, mock, config) {
  if(!noKeysChar.includes(wrapper.text())) {
    if(!config.upper) return expect(wrapper.text()).toBe(mock)
    expect(wrapper.text()).toBe(mock.toUpperCase())
  }
}

describe('Keyboard', () => {
  beforeEach(() => {
    wrapper = shallowMount(Keyboard, {
      global: { plugins: [store] },
      attachTo: document.body
    })
  })
  afterEach(async () => {
    wrapper.unmount()
  })
  it('is Keyboard a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders keys default', () => {
    wrapper.findAll('.App-keyboard-content .key').forEach((wrapper, index) => {
      expect(wrapper.text()).toBe(keys_mock[index])
    })
  })
  it('keyboard action capslock', async () => {
    await wrapper.find('.capslock').trigger('click')
    wrapper.findAll('.App-keyboard-content .key').forEach((wrapper, index) => {
      keyMockCheck(wrapper, keys_mock[index], { upper: true} )
    })
  })
  it('keyboard action shift', async () => {
    await wrapper.find('.shift').trigger('click')
    wrapper.findAll('.App-keyboard-content .key').forEach((wrapper, index) => {
      keyMockCheck(wrapper, keys_mock_shift[index], { upper: true} )
    })
  })
  it('keyboard action ctrl-alt', async () => {
    await wrapper.find('.ctrl-alt').trigger('click')
    wrapper.findAll('.App-keyboard-content .key').forEach((wrapper, index) => {
      keyMockCheck(wrapper, keys_mock_ctrl_alt[index], { upper: false} )
    })
  })
})
