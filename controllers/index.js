const record = require('../utils/recordInfo')

const hello = async (ctx, next) => {
  let name = ctx.query.name
  record('A001', ctx.req)
  ctx.body = `<h1>Hello, ${name}!</h1>`
}

const post = async (ctx, next) => {
  let data = ctx.request.body
  ctx.body = data
}

module.exports = {
  'GET /api/hello': hello,
  'POST /api/post': post
}
