import store from '../../../store';

export default function insertAtCaretEvent(element, text) {
  if (document.selection) {
    element.focus()
    let sel = document.selection.createRange()
    sel.text = text;
    element.focus()
  } else if (element.selectionStart || element.selectionStart === 0) {
    let startPos = element.selectionStart;
    let endPos = element.selectionEnd;
    let textValue = element.value.substring(0, startPos) + text + element.value.substring(endPos, element.value.length)

    store.commit("updateSearch", textValue)
    element.focus()
    element.selectionStart = startPos + text.length;
    element.selectionEnd = startPos + text.length;
  } else {
    store.commit("updateSearch", element.value += text)
    element.focus()
  }
}
