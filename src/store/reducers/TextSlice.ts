import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  texts: string[]
  currentText: string
}

const initialState: UserState = {
  texts: [] as string[],
  currentText: '',
}

export const userSlice = createSlice({
  name: 'Text',
  initialState,
  reducers: {
    addText(state, action: PayloadAction<string>) {
      state.texts.push(action.payload)
    },
    addCurrentToTexts(state, action: PayloadAction<string>) {
      state.texts[state.texts.length - 1] = action.payload
    },
    setCurrentText(state, action: PayloadAction<string>) {
      state.currentText = action.payload
    },
    setTexts(state, action: PayloadAction<string[]>) {
      state.texts = action.payload
    },
  },
})

export const textReducer = userSlice.reducer
export const textActions = userSlice.actions
