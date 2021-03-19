export function shiftEvent(status) {
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
        status ?
          key.textContent = key.textContent.toUpperCase()
          :
          key.textContent = key.textContent.toLowerCase()
        break;
    }
  }
}
