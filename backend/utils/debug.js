const logger = require('./logger');

const info = (i) => {
  logger.info(i);
};

const verbose = (v) => {
  logger.verbose(v);
};

const error = (e) => {
  logger.error(e);
};

module.exports = {
  verbose,
  info,
  error,
};

