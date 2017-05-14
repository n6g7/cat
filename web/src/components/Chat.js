import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Nav from './Nav'

class Chat extends PureComponent {
  render () {
    const { messages } = this.props

    return <main>
      <section>
        { messages.map((message, index) =>
          <p key={index}>{ message.text }</p>
        )}
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
