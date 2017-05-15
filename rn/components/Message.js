import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

class Message extends PureComponent {
  render () {
    const { message } = this.props
    const { meta, text } = message

    return <View>
      <Text style={styles.message}>
        <Text style={{ color: meta ? meta.colour : 'red' }}>{ meta ? meta.name : '??'}{'   '}</Text>
        <Text>{ text }</Text>
      </Text>
    </View>
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message

const styles = StyleSheet.create({
  message: {
    marginBottom: 5
  },
  author: {
    marginRight: 5
  }
})
