import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export default applyMiddleware(
  sagaMiddleware
)
