import { get, set } from 'local-storage'

const TEXTS = 'texts'

if (get(TEXTS) === null) set<string[]>(TEXTS, [])

export const save = (text: string) => {
  const texts = get<string[]>(TEXTS)
  texts.push(text)
  set<string[]>(TEXTS, texts)
}

export const copy = (text: string) => {
  navigator.clipboard.writeText(text)
}

export const read = (): string[] => {
  return get<string[]>(TEXTS)
}
