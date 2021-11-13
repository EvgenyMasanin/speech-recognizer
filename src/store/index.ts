import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { textReducer } from './reducers/TextSlice'
import { appReducer } from './reducers/AppSlice'

const rootReducer = combineReducers({
  textReducer,
  appReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
