import noKeysChar from './utils';

export function shiftEvent(status) {
  let keys = document.querySelectorAll('.App-keyboard-content .key')
  for(let key of keys) {
    if(noKeysChar.includes(key.textContent)) continue
    switch(key.textContent) {
      case '\'':
      case '"':
        status ? key.textContent = '"' : key.textContent = '\''
        break;
      case '1':
      case '!':
        status ? key.textContent = '!' : key.textContent = '1'
        break;
      case '2':
      case '@':
        status ? key.textContent = '@' : key.textContent = '2'
        break;
      case '3':
      case '#':
        status ? key.textContent = '#' : key.textContent = '3'
        break;
      case '4':
      case '$':
        status ? key.textContent = '$' : key.textContent = '4'
        break;
      case '5':
      case '%':
        status ? key.textContent = '%' : key.textContent = '5'
        break;
      case '6':
      case '¨':
        status ? key.textContent = '¨' : key.textContent = '6'
        break;
      case '7':
      case '&':
        status ? key.textContent = '&' : key.textContent = '7'
        break;
      case '8':
      case '*':
        status ? key.textContent = '*' : key.textContent = '8'
        break;
      case '9':
      case '(':
        status ? key.textContent = '(' : key.textContent = '9'
        break;
      case '0':
      case ')':
        status ? key.textContent = ')' : key.textContent = '0'
        break;
      case '-':
      case '_':
        status ? key.textContent = '_' : key.textContent = '-'
        break;
      case '=':
      case '+':
        status ? key.textContent = '+' : key.textContent = '='
        break;
      case '´':
      case '`':
        status ? key.textContent = '`' : key.textContent = '´'
        break;
      case '~':
      case '^':
        status ? key.textContent = '^' : key.textContent = '~'
        break;
      case '[':
      case '{':
        status ? key.textContent = '{' : key.textContent = '['
        break;
      case ']':
      case '}':
        status ? key.textContent = '}' : key.textContent = ']'
        break;
      case '\\':
      case '|':
        status ? key.textContent = '|' : key.textContent = '\\'
        break;
      case ',':
      case '<':
        status ? key.textContent = '<' : key.textContent = ','
        break;
      case '.':
      case '>':
        status ? key.textContent = '>' : key.textContent = '.'
        break;
      case ';':
      case ':':
        status ? key.textContent = ':' : key.textContent = ';'
        break;
      default:
        key.textContent = status ?
          key.textContent.toUpperCase()
          :
          key.textContent.toLowerCase()
    }
  }
}
