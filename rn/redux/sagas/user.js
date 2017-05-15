import { call, fork, put, take, takeEvery } from 'redux-saga/effects'

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  syncUser
} from '../reducers/user.actions'

import rsf, { firebaseApp } from '../rsf'

function * loginSaga () {
  try {
    yield firebaseApp.auth().signInAnonymously()
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
