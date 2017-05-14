const functions = require('firebase-functions')
const admin = require('firebase-admin')
const randomColor = require('randomcolor')

admin.initializeApp(functions.config().firebase)

exports.meta = functions.database.ref('/messages/{mid}').onWrite(event => {
  const { uid } = event.data.val()

  return admin.database().ref(`/users/${uid}`).once('value')
  .then(snapshot => {
    return admin.database().ref(`/messages/${event.params.mid}`).update({
      meta: snapshot.val()
    })
  })
})

exports.chooseUserColour = functions.auth.user().onCreate(event => {
  const colour = randomColor({ luminosity: 'dark' })

  return admin.database().ref(`/users/${event.data.uid}`).set({
    colour,
    name: event.data.displayName
  })
});
