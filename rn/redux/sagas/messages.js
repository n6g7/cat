import { call, fork, put, select, take, takeEvery } from 'redux-saga/effects'

import {
  types,
  changeNewMessage,
  syncMessages
} from '../reducers/messages.actions'

import rsf from '../rsf'

const transformMessages = messages =>
  Object.keys(messages).map(id => ({
    ...messages[id],
    id
  }))

const createMessage = (uid, text) => ({
  text,
  time: new Date().getTime(),
  uid
})

function * syncMessagesSaga () {
  const channel = yield call(rsf.database.channel, 'messages')

  while (true) {
    const { value: messages } = yield take(channel)
    const action = syncMessages(transformMessages(messages))
    yield put(action)
  }
}

function * sendMessageSaga () {
  const uid = yield select(state => state.user.user.uid)
  const text = yield select(state => state.messages.new)

  yield call(rsf.database.create, 'messages', createMessage(uid, text))

  yield put(changeNewMessage(''))
}

export default function * messagesSaga () {
  yield fork(syncMessagesSaga)
  yield takeEvery(types.MESSAGES.NEW.SEND, sendMessageSaga)
}
