/* global malarkey:false, moment:false */

import config from './index.config'
import routerConfig from './index.route'
import { runBlock } from './index.run'
import classy from 'ng-classy'

import './states'

angular
  .module('dope', [
    classy.app.name,
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngMaterial',
    'toastr'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
