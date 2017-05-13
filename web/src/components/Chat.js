import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Chat extends PureComponent {
  render () {
    const { messages } = this.props

    return <main>
      { messages.map((message, index) =>
        <p key={index}>{ message.text }</p>
      )}
    </main>
  }
}

Chat.propTypes = {
  messages: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  messages: state.messages
})

const ChatContainer = connect(mapStateToProps)(Chat)

export default ChatContainer
