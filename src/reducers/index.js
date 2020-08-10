import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import dummy from '../reducers/dummy'

const reducers = combineReducers({
  dummy
})

export const store = createStore(reducers, applyMiddleware(ReduxThunk))
