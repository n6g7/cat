import React, { PureComponent } from 'react'

import Chat from './Chat'
import Header from './Header'

class App extends PureComponent {
  render () {
    return <div>
      <Header />
      <Chat />
    </div>
  }
}

export default App
