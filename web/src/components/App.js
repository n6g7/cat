import React, { PureComponent } from 'react'

import Chat from './Chat'
import Header from './Header'

class App extends PureComponent {
  render () {
    return <div className='cat'>
      <Header />
      <Chat />
    </div>
  }
}

export default App
