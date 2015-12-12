import { Component } from 'ng-classy'

@Component('logo', {
  template: `
    <h1 ui-sref="main" style="cursor: pointer;">
      Dope <img src="/assets/images/js.png" />
    </h1>
  `
})
class Logo {
  constructor () {
  }
}

export default Logo
