import { State, Component } from 'ng-classy'
import './components'

@Component('explore', {
  template: require('./explore.html')
})
@State('explore', {
  url: '/explore'
})
class Explore {
  constructor ($log) {
    'ngInject'
  }
}

export default Explore
