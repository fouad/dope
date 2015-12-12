import { Component } from 'ng-classy'
import Please from 'pleasejs'

@Component('dopeResult', {
  bind: {
    result: '='
  },
  template: require('./dope-result.html')
})
class DopeResult {
  constructor ($sce) {
    'ngInject'

    this.$sce = $sce

    const {shareUrl, editUrl} = this.getUrls(this.result.url)

    this.result.url = shareUrl
    this.result.editUrl = editUrl
    this.color = Please.make_color()[0]
  }



  getUrls (url) {
    const pieces = url.split('::')
    const type = pieces[0]
    const key = pieces[1]

    switch (type) {
      case 'codepen':
        const author = key.split('/')[0]
        const id = key.split('/')[1]

        return {
          shareUrl: `http://codepen.io/${author}/embed/${id}/`,
          editUrl: `http://codepen.io/${author}/pen/${id}/`
        }
      case 'cssdeck':
        return {
          shareUrl: `http://cssdeck.com/labs/embed/${key}//noframe#dontkillanim`,
          editUrl: `http://cssdeck.com/labs/${key}`
        }
      case 'jsfiddle':
        return {
          shareUrl: `http://jsfiddle.net/${key}/embedded/result`,
          editUrl: `https://jsfiddle.net/${key}`
        }
      default:
        return ''
    }
  }

  trust (src) {
    return this.$sce.trustAsResourceUrl(src)
  }
}

export default DopeResult
