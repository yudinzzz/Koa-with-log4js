module.exports = function () {
  return {
    appenders: {
      console: {
        type: 'stdout',
        layout: {
          type: 'pattern',
          pattern: '%[%d{yyyy/MM/dd hh:mm:ss} -%] %m'
        }
      },
      points: {
        type: 'dateFile',
        filename: './logs/points.log',
        pattern: '-yyyy-MM-dd',
        maxLogSize: 10485760,
        backups: 30,
        layout: {
          type: 'messagePassThrough'
        }
      }
    },
    categories: {
      default: {
        appenders: ['console'],
        level: 'INFO'
      },
      points: {
        appenders: ['points'],
        level: 'TRACE'
      }
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID'
  }
}
