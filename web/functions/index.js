const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.meta = functions.database.ref('/messages/{mid}').onWrite(event => {
  const { uid } = event.data.val()

  return admin.auth().getUser(uid)
  .then(user => {
    return admin.database().ref(`/messages/${event.params.mid}`).update({
      meta: {
        name: user.displayName
      }
    })
  })
})
