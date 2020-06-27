import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'

export default function configureStore(): any {
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

  // Redux Dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const logger = createLogger()
  const enhancers = [applyMiddleware(ReduxPromise, logger, thunk)]
  const store = createStore(reducers, composeEnhancers(...enhancers))

  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    ;(module as any).hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers') // eslint-disable-line global-require, @typescript-eslint/no-var-requires
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
