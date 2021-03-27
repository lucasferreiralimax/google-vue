export function capslockEvent(status) {
  let keys = document.querySelectorAll('.App-keyboard-content .key')
  for(let key of keys) {
    switch(key.textContent) {
      case 'backspace':
      case 'whitespace':
      case 'capslock':
      case 'Ctrl+Alt':
      case 'shift 1':
      case 'shift 2':
        break;
      default:
        key.textContent = status ?
          key.textContent.toUpperCase()
          :
          key.textContent.toLowerCase()
        break;
    }
  }
}
