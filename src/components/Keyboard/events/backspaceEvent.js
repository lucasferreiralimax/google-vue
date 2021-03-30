import store from '../../../store';

export default function backspaceEvent(element) {
  if (document.selection) {
    element.focus()
    let sel = document.selection.createRange()
    --sel.text;
    element.focus()
  } else if (element.selectionStart || element.selectionStart === 0) {
    let startPos = element.selectionStart;
    let endPos = element.selectionEnd;
    let textValue = element.value.substring(0, startPos-1) + element.value.substring(endPos, element.value.length)

    store.commit("updateSearch", textValue)
    element.focus()
    element.selectionStart = startPos;
    element.selectionEnd = --endPos;
  } else {
    store.commit("updateSearch", --element.value)
    element.focus()
  }
}
