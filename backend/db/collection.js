const db = require("./db");
const DB_COLLECTION = "families";

const collection = db.collection(DB_COLLECTION);
console.log(`Connected to collection ${db.projectId}/${DB_COLLECTION}`);

export default collection;
