const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const log4js = require('log4js')
const logger = log4js.getLogger()
const controller = require('./decorator/controller')
const logconf = require('./config/logconf')
const whiteApi = require('./config/whiteApi')

const port = 3000
const app = new Koa()

// log4js config
log4js.configure(logconf())

// add bodyParser
app.use(bodyParser())

// request log
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  logger.info(`${ctx.status} ${ctx.method} ${ctx.url} - ${ms}ms`)
})

// set static files directory
app.use(static(__dirname + '/static'))

// check login
app.use(async (ctx, next) => {
  let path = ctx.path
  for (let i of whiteApi) {
    if (path === i) {
      await next()
    } else {
      ctx.status = 401
      ctx.body = { status: 401, msg: 'unauthorized' }
    }
  }
})

// controllers
app.use(controller.routes())
app.use(controller.allowedMethods())

app.listen(port, '0.0.0.0')

logger.info(`Server listening on port ${port}`)
