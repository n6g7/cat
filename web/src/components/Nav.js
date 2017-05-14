import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeNewMessage, sendNewMessage } from '../redux/reducers/messages.actions'
import { login } from '../redux/reducers/user.actions'

class Nav extends PureComponent {
  constructor (props) {
    super(props)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  onKeyPress (event) {
    if (event.key === 'Enter') this.props.sendNewMessage()
  }

  render () {
    const {
      changeNewMessage,
      loggedIn,
      login,
      newMessage,
      sendNewMessage
    } = this.props

    return <nav>
      { loggedIn &&
        <input
          value={newMessage}
          onChange={event => changeNewMessage(event.target.value)}
          onKeyPress={this.onKeyPress}
          autoFocus
        />
      }
      { loggedIn &&
        <button onClick={sendNewMessage}>Send</button>
      }
      { !loggedIn &&
        <button onClick={login}>Login</button>
      }
    </nav>
  }
}

Nav.propTypes = {
  changeNewMessage: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  sendNewMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  newMessage: state.messages.new
})

const mapDispatchToProps = {
  changeNewMessage,
  login,
  sendNewMessage
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer
