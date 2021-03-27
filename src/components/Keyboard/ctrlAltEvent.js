import noKeysChar from './utils';

export function ctrlAltEvent(status) {
  let keys = document.querySelectorAll('.App-keyboard-content .key')
  for(let key of keys) {
    if(noKeysChar.includes(key.textContent)) continue
    switch(key.textContent) {
      case '1':
      case '!':
      case '¹':
        status ? key.textContent = '¹' : key.textContent = '1'
        break;
      case '2':
      case '@':
      case '²':
        status ? key.textContent = '²' : key.textContent = '2'
        break;
      case '3':
      case '#':
      case '³':
        status ? key.textContent = '³' : key.textContent = '3'
        break;
      case '4':
      case '$':
      case '£':
        status ? key.textContent = '£' : key.textContent = '4'
        break;
      case '5':
      case '%':
      case '¢':
        status ? key.textContent = '¢' : key.textContent = '5'
        break;
      case '6':
      case '¨':
      case '¬':
        status ? key.textContent = '¬' : key.textContent = '6'
        break;
      case '=':
      case '+':
      case '§':
        status ? key.textContent = '§' : key.textContent = '='
        break;
      case '[':
      case '{':
      case 'ª':
        status ? key.textContent = 'ª' : key.textContent = '['
        break;
      case ']':
      case '}':
      case 'º':
        status ? key.textContent = 'º' : key.textContent = ']'
        break;
      default:
        status ?
          key.classList.add('hidden')
          :
          key.classList.remove('hidden')
    }
  }
}
