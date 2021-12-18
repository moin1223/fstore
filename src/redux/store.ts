import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
