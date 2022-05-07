const utils = require('../utils/debug');
const admin = require('firebase-admin');
const GOOGLE_APPLICATION_CREDENTIALS = JSON.parse(
  Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'base64').toString(
    'utf-8'
  )
);
admin.initializeApp({
  credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS),
});
const db = admin.firestore();
utils.info(`Connection to GCP Project ${db.projectId} successful!`);
module.exports = db;