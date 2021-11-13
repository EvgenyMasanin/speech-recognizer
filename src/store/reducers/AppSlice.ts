import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  isChecked: boolean
  canWork: boolean
}

const initialState: AppState = {
  isChecked: false,
  canWork: true,
}

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setCanWork(state, { payload }: PayloadAction<boolean>) {
      state.isChecked = true
      state.canWork = payload
    },
  },
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
