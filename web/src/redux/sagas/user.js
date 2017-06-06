import firebase from 'firebase'
import { call, fork, put, take, takeEvery } from 'redux-saga/effects'

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  syncUser
} from '../reducers/user.actions'

import rsf from '../rsf'

const authProvider = new firebase.auth.GoogleAuthProvider()

function * loginSaga () {
  try {
    yield call(rsf.signInWithPopup, authProvider)
    yield put(loginSuccess())
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function * logoutSaga () {
  try {
    yield call(rsf.logout)
    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutFailure(error))
  }
}

function * syncUserSaga () {
  const channel = yield call(rsf.authChannel)

  while (true) {
    const { user } = yield take(channel)

    if (user) yield put(syncUser(user))
    else yield put(syncUser(null))
  }
}

export default function * loginRootSaga () {
  yield fork(syncUserSaga)
  yield [
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga)
  ]
}
