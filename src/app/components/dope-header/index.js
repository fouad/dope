import { Component } from 'ng-classy'

@Component('dopeHeader', {
  template: `
    <header class="header" layout="row" layout-wrap>
      <logo ui-sref="main({q: 'fireflies'})" flex-sm="100"></logo>
      <small flex-sm="100">We google, so you don't have to.</small>
      <span flex></span>
      <md-button flex-sm="100" class="md-primary" ui-sref="explore">
        <i class="material-icons">explore</i>
        Explore
      </md-button>
      <md-button flex-sm="100" class="md-primary" href="https://github.com/fouad/dope" target="_blank">
        <i class="material-icons">code</i>
        Contribute
      </md-button>
    </header>
  `
})
class DopeHeader {
  constructor () {
  }
}

export default DopeHeader
