import { IAddTextAction, IUpdateCurrentText, TextActions } from './actions'

const initialState = {
  texts: [] as string[],
  currentText: '',
}

type textReducerActions = IAddTextAction | IUpdateCurrentText

export const textReducer = (
  state = initialState,
  { type, payload }: textReducerActions
): typeof initialState => {
  const { texts } = state
  switch (type) {
    case TextActions.ADD_TEXT: {
      console.log('texts', [...texts.slice(0, texts.length - 1), payload])

      return {
        ...state,
        texts: [...texts.slice(0, texts.length - 1), payload],
      }
    }
    case TextActions.UPDATE_CURRENT_TEXT:
      return {
        ...state,
        currentText: payload,
      }
    default:
      return state
  }
}
