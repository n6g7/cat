import { call, fork, put, select, take, takeEvery } from 'redux-saga/effects'

import {
  types,
  changeNewMessage,
  syncMessages
} from '../reducers/messages.actions'

import rsf from '../rsf'

function * syncMessagesSaga () {
  const channel = yield call(rsf.channel, 'messages')

  while (true) {
    const messages = yield take(channel)
    const data = Object.keys(messages).map(id => ({
      ...messages[id],
      id
    }))
    const action = syncMessages(data)
    yield put(action)
  }
}

function * sendMessageSaga () {
  const uid = yield select(state => state.user.user.uid)
  const text = yield select(state => state.messages.new)

  yield call(rsf.create, 'messages', {
    text,
    time: new Date().getTime(),
    uid
  })

  yield put(changeNewMessage(''))
}

export default function * messagesSaga () {
  yield fork(syncMessagesSaga)
  yield takeEvery(types.MESSAGES.NEW.SEND, sendMessageSaga)
}
