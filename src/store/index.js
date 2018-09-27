import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './root-reducer';

export default () => {
  const store = createStore(
    rootReducer,
  )
  return store
}