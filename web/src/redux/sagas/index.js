import messages from './messages'
import notifications from './notifications'
import user from './user'

export default function * rootSaga () {
  const sagas = [
    messages(),
    user()
  ]

  if (window.Notification) sagas.push(notifications())

  yield sagas
}
