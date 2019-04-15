var host = 'http://172.18.1.65:80'
var domain = 'http://alipayopenitc-xcx.trawe.cn'
var gateway = 'http://alipayetc.trawe.cn'
var channelType = 'mini'

if (process.NODE_ENV === 'development') {
  host = 'http://60.205.94.59:8215'
  domain = 'http://60.205.94.59:4000'
  gateway = 'http://alipayitc.trawe.net:4000'
}

module.exports = {
  host,
  domain,
  gateway,
  channelType
}
