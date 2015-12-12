const Store = {}

Store._results = require('./fixtures')

Store.get = (require('./get')).bind(Store)

export default { Store }
