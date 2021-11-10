export enum TextActions {
  'ADD_TEXT' = 'ADD_TEXT',
  'UPDATE_CURRENT_TEXT' = 'UPDATE_CURRENT_TEXT',
}

export interface IAddTextAction {
  type: TextActions.ADD_TEXT
  payload: string
}

export interface IUpdateCurrentText {
  type: TextActions.UPDATE_CURRENT_TEXT
  payload: string
}

export const addTextAction = (text: string): IAddTextAction => ({
  type: TextActions.ADD_TEXT,
  payload: text,
})

export const updateCurrentText = (text: string): IUpdateCurrentText => ({
  type: TextActions.UPDATE_CURRENT_TEXT,
  payload: text,
})
