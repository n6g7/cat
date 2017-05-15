import React, { PureComponent } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
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

    return <View style={styles.nav}>
      { loggedIn &&
        <TextInput
          value={newMessage}
          onChangeText={changeNewMessage}
          onKeyPress={this.onKeyPress}
          autoFocus
          style={styles.input}
        />
      }
      { loggedIn &&
        <Button onPress={sendNewMessage} title='Send' color='#e67e22' />
      }
      { !loggedIn &&
        <Button onPress={login} title='Login' color='#e67e22' />
      }
    </View>
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

const styles = StyleSheet.create({
  nav: {
    alignItems: 'center',
    backgroundColor: '#f7d8bc',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8
  },
  input: {
    backgroundColor: '#fae8d7',
    flex: 1,
    marginRight: 5
  }
})
