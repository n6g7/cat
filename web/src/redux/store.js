import { compose, createStore } from 'redux'

import { middlewares } from './enhancers'
import { sagaMiddleware } from './enhancers/middlewares'
import reducers from './reducers'
import rootSaga from './sagas'

const customComposer = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhancers = customComposer(
  middlewares
)

const store = createStore(
  reducers,
  enhancers
)

sagaMiddleware.run(rootSaga)

export default store
