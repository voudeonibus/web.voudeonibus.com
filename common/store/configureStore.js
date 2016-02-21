// JUST A REDUX EXAMPLE!!
// I'LL CHANGE THIS VERY SOON!

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
