import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';

const reducers = combineReducers({
});

export const store = createStore(reducers, applyMiddleware(ReduxThunk));