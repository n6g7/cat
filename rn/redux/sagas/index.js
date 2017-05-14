import messages from './messages'
import user from './user'

export default function * rootSaga () {
  yield [
    messages(),
    user()
  ]
}
