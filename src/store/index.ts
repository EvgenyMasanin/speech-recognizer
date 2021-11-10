// import { textReducer } from './Text/reducer'
// import { applyMiddleware, combineReducers, createStore } from 'redux'

// const rootReducer = combineReducers({
//   Text: textReducer,
// })

// export const store = createStore(rootReducer)

// export type RootState = ReturnType<typeof rootReducer>

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { textReducer } from './reducers/TextSlice'

const rootReducer = combineReducers({
  textReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
