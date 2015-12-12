import { Component } from 'ng-classy'
import '../dope-result'

@Component('dopeSearch', {
  bind: {
    query: '=',
    results: '='
  },
  template: require('./dope-search.html')
})
class DopeSearch {
  constructor ($log, $scope) {
    'ngInject'

    this.$scope = $scope
  }

  emit (type, ev) {
    this.$scope.$emit(`dope-search:${type}`, ev)
  }
}

export default DopeSearch
