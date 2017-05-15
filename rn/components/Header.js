import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Header extends PureComponent {
  render () {
    return <View style={styles.header}>
      <Text>🐈</Text>
    </View>
  }
}

export default Header

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    marginTop: 10
  }
})
