import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Message extends PureComponent {
  render () {
    const { message } = this.props
    const { meta, text } = message

    const style = meta && meta.colour ? { color: meta.colour } : null

    return <p>
      <span className='author' style={style}>{ meta ? meta.name : '??'}</span>
      { text }
    </p>
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
