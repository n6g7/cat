import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'

import Chat from './Chat'
import Header from './Header'

class App extends PureComponent {
  render () {
    return <View style={styles.app}>
      <Header />
      <Chat />
    </View>
  }
}

export default App

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#ecf0f1'
  }
})
