import { all, call, fork, select, take, takeEvery } from 'redux-saga/effects'
import firebase from 'firebase'

import rsf from '../rsf'

import { types } from '../reducers/user.actions'

function * saveTokenSaga (token) {
  const uid = yield select(state => state.user.user.uid)

  yield call(rsf.update, `/users/${uid}/token`, token)
}

export default function * () {
  const messaging = firebase.messaging()

  yield messaging.requestPermission()

  const { token } = yield all({
    token: messaging.getToken(),
    login: take(types.LOGIN.SUCCESS)
  })
  yield fork(saveTokenSaga, token)

  const tokenRefreshChannel = rsf.tokenRefreshChannel()
  yield takeEvery(tokenRefreshChannel, saveTokenSaga)
}
