import { all, call, fork, select, take, takeEvery } from 'redux-saga/effects'
import firebase from 'firebase'

import rsf from '../rsf'

import { types } from '../reducers/user.actions'

function * saveTokenSaga (token) {
  const uid = yield select(state => state.user.user ? state.user.user.uid : null)

  if (uid) {
    yield call(rsf.database.update, `/users/${uid}/token`, token)
  }
}

export default function * () {
  const messaging = firebase.messaging()

  yield messaging.requestPermission()

  const { token } = yield all({
    token: messaging.getToken(),
    login: take(types.SYNC_USER)
  })
  yield fork(saveTokenSaga, token)

  const tokenRefreshChannel = rsf.messaging.tokenRefreshChannel()
  yield takeEvery(tokenRefreshChannel, saveTokenSaga)
}
