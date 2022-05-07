const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
  transports: [
    new transports.File({
      filename: 'log/server.log',
      format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(
          (level) => `${level.level}: ${[level.timestamp]}: ${level.message}`
        )
      ),
    }),
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});