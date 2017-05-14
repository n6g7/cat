import messages from './messages'
import notifications from './notifications'
import user from './user'

export default function * rootSaga () {
  yield [
    messages(),
    notifications(),
    user()
  ]
}
