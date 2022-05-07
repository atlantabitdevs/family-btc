const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const MACAROON = process.env.MACAROON;
const TOKEN = process.env.TOKEN;

const apiCall = async (path, method, json = null) => {
    if (json) {
        return await fetch(BASE_URL + path, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Cookie: `macaroon=${MACAROON}; token=${TOKEN}`,
            },
            credentials: 'include',
            body: JSON.stringify(json),
        });
    } else {
        return await fetch(BASE_URL + path, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Cookie: `macaroon=${MACAROON}; token=${TOKEN}`,
            },
            credentials: 'include',
        });
    }
};

module.exports = { apiCall };
