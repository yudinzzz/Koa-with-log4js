const fs = require('fs')
const path = require('path')
const router = require('koa-router')()

function addMapping (router, mapping) {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      let path = url.substring(4)
      router.get(path, mapping[url])
    } else if (url.startsWith('POST ')) {
      let path = url.substring(5)
      router.post(path, mapping[url])
    } else if (url.startsWith('ALL ')) {
      let path = url.substring(4)
      router.all(path, mapping[url])
    } else {
      console.log('Unsupported method')
    }
  }
}

function addControllers (router, dir) {
  fs.readdirSync(path.resolve(__dirname, dir))
    .filter(f => {
      return f.endsWith('.js')
    })
    .forEach(f => {
      let mapping = require(path.resolve(__dirname, dir, f))
      addMapping(router, mapping)
    })
}

module.exports = {
  routes: function (dir) {
    let _dir = dir || '../controllers'
    addControllers(router, _dir)
    return router.routes()
  },
  allowedMethods: function () {
    return router.allowedMethods()
  }
}
