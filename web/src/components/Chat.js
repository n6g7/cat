import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeNewMessage, sendNewMessage } from '../redux/reducers/messages.actions'

class Chat extends PureComponent {
  render () {
    const {
      changeNewMessage,
      messages,
      newMessage,
      sendNewMessage
    } = this.props

    return <main>
      <section>
        { messages.map((message, index) =>
          <p key={index}>{ message.text }</p>
        )}
      </section>
      <nav>
        <input
          value={newMessage}
          onChange={event => changeNewMessage(event.target.value)}
        />
        <button onClick={sendNewMessage}>Send</button>
      </nav>
    </main>
  }
}

Chat.propTypes = {
  changeNewMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  newMessage: PropTypes.string.isRequired,
  sendNewMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  messages: state.messages.list,
  newMessage: state.messages.new
})

const mapDispatchToProps = {
  changeNewMessage,
  sendNewMessage
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer
