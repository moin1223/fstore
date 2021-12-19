import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import Reduxthunk from 'redux-thunk';

const middleware = applyMiddleware(Reduxthunk);

const store = createStore(rootReducer, composeWithDevTools(middleware));
export type AppState = ReturnType<typeof rootReducer>;

export default store;
