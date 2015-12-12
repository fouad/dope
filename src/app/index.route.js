import { log } from './utils'

function routerConfig ($locationProvider, $urlRouterProvider) {
  'ngInject'

  $locationProvider
    // .html5Mode(true)
    // .hashPrefix('!')
  $urlRouterProvider.otherwise('/')
}

export default routerConfig
