import noKeysChar from './utils';

export function capslockEvent(status) {
  let keys = document.querySelectorAll('.App-keyboard-content .key')
  for(let key of keys) {
    if(noKeysChar.includes(key.textContent)) continue
    key.textContent = status ?
      key.textContent.toUpperCase()
      :
      key.textContent.toLowerCase()
  }
}
