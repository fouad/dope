import q from 'q'
import _ from 'lodash'

export default function get (key) {
  const deferred = q.defer()

  // TODO(fouad: add fetch from API
  deferred.resolve(_.clone(this._results[key], true))

  return deferred.promise
}
