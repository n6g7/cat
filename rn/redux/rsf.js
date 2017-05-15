import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDgU8546DjMsINU7EpQknE3kwkqlBPouE0',
  authDomain: 'chat-5c295.firebaseapp.com',
  databaseURL: 'https://chat-5c295.firebaseio.com',
  projectId: 'chat-5c295',
  storageBucket: 'chat-5c295.appspot.com',
  messagingSenderId: '994318427763'
})

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf
