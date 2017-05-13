import { types } from './messages.actions'

const initialState = [
  { text: 'hello' },
  { text: 'world' }
]

export default function messagesReducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.MESSAGES_SYNC:
      return action.messages
    default:
      return state
  }
}
