import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Texts, Text } from 'types/Text'
import { v4 as getID } from 'uuid'

export interface UserState {
  texts: Texts
  currentText: Text
}

const initialState: UserState = {
  texts: [] as Texts,
  currentText: { id: getID(), text: '' },
}

export const userSlice = createSlice({
  name: 'Text',
  initialState,
  reducers: {
    addText(state, action: PayloadAction<Text>) {
      state.texts.push(action.payload)
    },
    addCurrentToTexts(state, action: PayloadAction<Text>) {
      state.texts[state.texts.length - 1] = action.payload
    },
    deleteText(state, action: PayloadAction<string>) {
      state.texts = state.texts.filter((text) => text.id !== action.payload)
    },
    changeCurrentText(state, action: PayloadAction<Text>) {
      state.currentText = action.payload
    },
    setCurrentText(state, action: PayloadAction<string>) {
      state.currentText.text = action.payload
    },
    setTexts(state, action: PayloadAction<Texts>) {
      state.texts = action.payload
    },
  },
})

export const textReducer = userSlice.reducer
export const textActions = userSlice.actions
