import { Component } from 'ng-classy'

@Component('dopeQueries', {
  bind: {
    limit: '='
  },
  template: `
    <style>
      dope-queries div {
        display: inline-block;
        margin: 15px auto;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        outline: none;
      }

      dope-queries div i {
        color: #90A4AE;
        vertical-align: middle;
        line-height: 22px;
        font-size: 20px;
        transform: rotateZ(90deg);
      }
    </style>
    <div
      ng-repeat="result in vm.results"
      ui-sref="main({q: result.query})"
      ng-style="{
        color: result.color
      }">
      <i class="material-icons">search</i> {{::result.query}}
    </div>
  `
})
class DopeQueries {
  _results = [{
    id: 1,
    query: 'fireflies',
    color: '#9CCC65'
  }, {
    id: 2,
    query: 'd3',
    color: '#4FC3F7'
  }, {
    id: 3,
    query: 'fireworks',
    color: '#1DE9B6'
  }, {
    id: 4,
    query: 'ripples',
    color: '#2979FF'
  }]

  constructor () {
    if (this.limit) {
      this.results = this._results.filter((r, i) => i < this.limit)
    } else {
      this.results = this._results
    }
  }
}

export default DopeQueries
