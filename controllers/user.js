const record = require('../utils/recordInfo')
const axios = require('axios')
const config = require('../config/serverconf')

const login = async (ctx, next) => {}

module.exports = {
  'GET /api': login
}
