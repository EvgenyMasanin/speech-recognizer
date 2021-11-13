import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { textReducer } from './reducers/text.slice'
import { appReducer } from './reducers/app.slice'

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
