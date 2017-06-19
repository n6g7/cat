import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user.actions'

class Header extends PureComponent {
  render () {
    return <header>
      <h1 onClick={this.props.logout}>🐈</h1>
    </header>
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
