import messages from './messages'

export default function * rootSaga () {
  yield [
    messages()
  ]
}
