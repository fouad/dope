import { State, Component } from 'ng-classy'
import cs, { Store } from './components'

@Component('main', {
  template: require('./main.html')
})
@State('main', {
  url: '/?q',
  reloadOnSearch: false
})
class Main {
  // results = [{
  //   id: 1,
  //   title: 'Fi',
  //   url: 'http://cssdeck.com/labs/embed/zlsshhqv//noframe#dontkillanim'
  // }, {
  //   id: 2,
  //   title: 'HTML5 Fireflies',
  //   url: 'https://codepen.io/andrewreifman/embed/vgGjb/'
  // }]

  constructor ($log, $stateParams, $location, $scope, $timeout) {
    'ngInject'


    this.$location = $location
    this.$timeout = $timeout

    this.query = $stateParams.q || ''

    $scope.$on('$locationChangeSuccess', () => {
      if ($stateParams.q !== this.query) {
        this.setQuery($stateParams.q || '')
      }
    })

    $scope.$on('dope-search:change', (ev) => {
      $timeout(this.updateSearch.bind(this))
    })

    if (!this.query) {
      this.setQuery('fireflies')
    } else {
      this.loadResults()
    }
  }

  setQuery (val) {
    this.query = val
    this.$timeout(this.updateSearch.bind(this))
    this.loadResults()
  }

  updateSearch () {
    this.$location.search('q', this.query || null)
  }

  handleErrors () {
    function myHandler(msg, url, line){
      //do stuff here...
    }

    //hook in all frames...
    function addErrorHandler(win, handler){
      win.onerror = handler;
      for(var i=0;i<win.frames.length;i++){
        addErrorHandler(win.frames[i], handler)
      }
    }
    //start with this window... and add handler recursively
    addErrorHandler(window, myHandler)
  }

  loadResults () {
    console.log('Running #' + this.query)
    this.loading = true

    Store
      .get(this.query)
      .then(results => {
        this.$timeout(() => {
          if (!this.loading) {
            return
          }

          this.results = results
          this.loading = false
          this.handleErrors()
        }, 1500)
      })
  }
}

export default Main
