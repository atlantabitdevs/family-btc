const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const MACAROON = process.env.MACAROON;
const TOKEN = process.env.TOKEN;

const apiCall = async (path, method, json={}) => {
 return await fetch(BASE_URL + path, {
     method: method,
     headers: {
         'Content-Type': 'application/json',
         'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
     },
     credentials: 'include',
     body: JSON.stringify(json),
 });
};

module.exports = { apiCall }