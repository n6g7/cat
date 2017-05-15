import { compose, createStore } from 'redux'

import { middlewares } from './enhancers'
import { sagaMiddleware } from './enhancers/middlewares'
import reducers from './reducers'
import rootSaga from './sagas'

const enhancers = compose(
  middlewares
)

const store = createStore(
  reducers,
  enhancers
)

sagaMiddleware.run(rootSaga)

export default store
