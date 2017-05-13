export const types = {
  MESSAGES: {
    SYNC: 'MESSAGES.SYNC',
    NEW: {
      CHANGE: 'MESSAGES.NEW.CHANGE',
      SEND: 'MESSAGES.NEW.SEND'
    }
  }
}

export const syncMessages = messages => ({
  type: types.MESSAGES.SYNC,
  messages
})

export const changeNewMessage = text => ({
  type: types.MESSAGES.NEW.CHANGE,
  text
})

export const sendNewMessage = () => ({
  type: types.MESSAGES.NEW.SEND
})
