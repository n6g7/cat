import { types } from './user.actions'

const initialState = {
  loading: false,
  loggedIn: false,
  user: null
}

export default function userReducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true
      }
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loading: false
      }
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false
      }
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false
      }
    case types.SYNC_USER:
      return {
        ...state,
        loggedIn: !!action.user,
        user: action.user
      }
    default:
      return state
  }
}
