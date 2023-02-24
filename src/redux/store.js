import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import getreducer from './Reduces/Reduces'

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(getreducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
export default store;

