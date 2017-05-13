import { types } from './messages.actions'

const initialState = {
  list: [
    { text: 'hello' },
    { text: 'world' }
  ],
  new: ''
}

export default function messagesReducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.MESSAGES.SYNC:
      return {
        ...state,
        list: action.messages
      }
    case types.MESSAGES.NEW.CHANGE:
      return {
        ...state,
        new: action.text
      }
    default:
      return state
  }
}
