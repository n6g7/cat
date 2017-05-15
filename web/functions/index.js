const functions = require('firebase-functions')
const admin = require('firebase-admin')
const randomColor = require('randomcolor')

admin.initializeApp(functions.config().firebase)

const TOPIC = 'chat'

exports.meta = functions.database.ref('/messages/{mid}').onWrite(event => {
  const { meta, text, uid } = event.data.val()

  // Don't do stuff if meta is already set.
  if (meta) return

  return admin.database().ref(`/users/${uid}`).once('value')
  .then(snapshot => {
    const user = snapshot.val()

    return admin.database()
      .ref(`/messages/${event.params.mid}`)
      .update({
        meta: {
          colour: user.colour,
          name: user.name
        },
        uid: null
      })
      .then(() => {
        const payload = {
          notification: {
            title: `${user.name} on 🐈`,
            body: text
          }
        }

        return admin.messaging().sendToTopic(TOPIC, payload)
      })
  })
})

exports.chooseUserColour = functions.auth.user().onCreate(event => {
  const colour = randomColor({ luminosity: 'dark' })

  return admin.database().ref(`/users/${event.data.uid}`).set({
    colour,
    name: event.data.displayName || 'anon'
  })
})

exports.addTokenToTopic = functions.database.ref('/users/{uid}/token').onWrite(event => {
  const token = event.data.val()
  return admin.messaging().subscribeToTopic(token, TOPIC)
})
