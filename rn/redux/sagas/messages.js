import { call, fork, put, select, take, takeEvery } from 'redux-saga/effects'

import {
  types,
  changeNewMessage,
  syncMessages
} from '../reducers/messages.actions'

import rsf from '../rsf'

const transformMessages = ({ value: messages }) =>
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
  const uh = yield call(rsf.database.read, 'messages/abc')
  console.log(uh)

  yield fork(
    rsf.database.sync,
    'messages',
    {
      successActionCreator: syncMessages,
      transform: transformMessages
    }
  )
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
