const moment = require('moment')
const logger = require('log4js').getLogger('points')
const getUserIp = require('./getUserIp')

module.exports = function (code, req) {
  logger.trace(
    `{${code || ''}}{ITC}{${moment().format(
      'YYYY-MM-DD HH:mm:ss'
    )}}{${getUserIp(req || '')}}{}`
  )
}
