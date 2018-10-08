import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './root-reducer';

export default () => {
  let store;
  //判断是否有Redux调试工具
  if(!(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) {
    store = createStore(
      rootReducer,
    )
  } else {
    store = createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
  return store
}
