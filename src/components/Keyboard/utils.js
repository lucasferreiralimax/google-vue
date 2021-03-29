export { default as shiftEvent } from './shiftEvent'
export { default as ctrlAltEvent } from './ctrlAltEvent'
export { default as capslockEvent } from './capslockEvent'

export const noKeysCharEvents = [
  'capslock',
  'Ctrl+Alt',
  'shift 1',
  'shift 2'
]

const noKeysChar = [
  'backspace',
  'whitespace',
  ...noKeysCharEvents
]

export default noKeysChar
