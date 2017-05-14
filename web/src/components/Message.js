import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Message extends PureComponent {
  render () {
    const { message } = this.props

    return <p>
      <span className='author'>{ message.meta ? message.meta.name : '??'}</span>
      { message.text }
    </p>
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
