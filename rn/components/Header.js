import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

import { logout } from '../redux/reducers/user.actions.js'

class Header extends PureComponent {
  render () {
    const { logout } = this.props

    return <View style={styles.header}>
      <Text onLongPress={logout}>🐈</Text>
    </View>
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  logout
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    marginTop: 10
  }
})
