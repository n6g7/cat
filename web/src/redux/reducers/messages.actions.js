export const types = {
  MESSAGES_SYNC: 'MESSAGES_SYNC'
}

export const syncMessages = messages => ({
  type: types.MESSAGES_SYNC,
  messages
})
