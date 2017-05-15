import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store.js'
import App from './components/App.js'

export default class Cat extends Component {
  render () {
    return <Provider store={store}>
      <App />
    </Provider>
  }
}
