import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Message from './Message'
import Nav from './Nav'

class Chat extends PureComponent {
  componentDidUpdate (prevProps, prevState) {
    this.section.scrollTop = this.section.scrollHeight
  }

  render () {
    const { messages } = this.props

    return <main>
      <section ref={c => { this.section = c }}>
        { messages.map(message => <Message message={message} key={message.id} />)}
      </section>
      <Nav />
    </main>
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
