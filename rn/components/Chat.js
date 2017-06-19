import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, View } from 'react-native'

import Message from './Message'
import Nav from './Nav'

class Chat extends PureComponent {
  constructor (props) {
    super(props)

    this.scroll = this.scroll.bind(this)
  }

  scroll () {
    this.section.scrollToEnd()
  }

  render () {
    const { messages } = this.props

    return <View style={styles.main}>
      <ScrollView ref={c => { this.section = c }} style={styles.chat} onContentSizeChange={this.scroll}>
        { messages.map(message =>
          <Message message={message} key={message.id} />
        )}
      </ScrollView>
      <Nav />
    </View>
  }
}

Chat.propTypes = {
  messages: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  messages: state.messages.list
})

const ChatContainer = connect(mapStateToProps)(Chat)

export default ChatContainer

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column'
  },
  chat: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    paddingBottom: 10
  }
})
