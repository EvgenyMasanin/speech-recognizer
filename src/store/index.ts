import { TextReducer } from './Text/reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  TextReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
