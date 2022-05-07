const debug = require('../utils/debug');
const db = require('./db');
const DB_COLLECTION = 'parkLightning';

const collection = db.collection(DB_COLLECTION);
debug.info(`Connected to collection ${db.projectId}/${DB_COLLECTION}`);

module.exports = collection;