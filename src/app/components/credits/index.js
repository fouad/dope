import { Component } from 'ng-classy'

@Component('credits', {
  template: `
    <style>
      credits {
        display: block;
        margin: 40px 0 60px;
        text-align: center;
      }

      credits i {
        font-size: 12px;
        line-height: 18px;
        vertical-align: middle;
        color: #D32F2F;
      }

      credits a {
        color: #2196F3;
        text-decoration: none;
        border-bottom: 2px solid;
      }
    </style>
    <footer>
      <small>
        Currently hardcoded. Work in progress.<br />
        Made with <i class="material-icons">favorite</i> by <a href="https://fouad.co">Fouad Matin</a>
      </small>
    </footer>
  `
})
class Credits {
  constructor () {
  }
}

export default Credits
