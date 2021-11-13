import { get, set } from 'local-storage'
import { Text, Texts } from 'types/Text'

const TEXTS = 'texts'

const setToInitialValue = () => {
  set<Texts>(TEXTS, [])
}

if (get(TEXTS) === null) setToInitialValue()

export const save = (text: Text) => {
  const texts = get<Texts>(TEXTS)
  if (!texts.some((el) => el.text === text.text)) texts.push(text)
  set<Texts>(TEXTS, texts)
}

export const copy = (text: string) => {
  navigator.clipboard.writeText(text)
}

export const read = (): Texts => {
  return get<Texts>(TEXTS)
}

export const clear = () => {
  setToInitialValue()
}
