import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import App from './components/App'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
