const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const MACAROON = process.env.MACAROON;
const TOKEN = process.env.TOKEN;

const initSensei = async (username, passphrase, alias, electrum_url, start) => {
    const res = await fetch(`${BASE_URL}/v1/init`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
        body: {
            username,
            passphrase,
            alias,
            electrum_url,
            start,
        },
    });

    console.log(res);
    return await res.json();
};

const listNodes = async (page, take, query) => {
    const res = await fetch(`${BASE_URL}/v1/nodes?page=${0}&take=${10}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        }
    });

    console.log(res);
    return await res.json();
};

const createNode = async (username, passphrase, alias, start) => {
    const res = await fetch(`${BASE_URL}/v1/nodes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
        body: {
            username,
            passphrase,
            alias,
            start,
        },
    });

    console.log(res);
    return await res.json();
};

const startNode = async (pubkey, passphrase) => {
    const res = await fetch(`${BASE_URL}/v1/nodes/start`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
        body: {
            pubkey,
            passphrase,
        },
    });

    console.log(res);
    return await res.json();
};

const stopNode = async (pubkey) => {
    const res = await fetch(`${BASE_URL}/v1/nodes/stop`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
        body: {
            pubkey,
        },
    });

    console.log(res);
    return await res.json();
};

const deleteNode = async (pubkey) => {
    const res = await fetch(`${BASE_URL}/v1/nodes/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
        body: {
            pubkey,
        },
    });

    console.log(res);
    return await res.json();
};

const nodeStatus = async () => {
    const res = await fetch(`${BASE_URL}/v1/status`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
    });

    console.log(res);
    return await res.json();
};

const startSensi = async (passphrase) => {
    const res = await fetch(`${BASE_URL}/v1/start`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
        body: {
            passphrase,
        },
    });

    console.log(res);
    return await res.json();
};

const login = async (username, passphrase) => {
    const res = await fetch(`${BASE_URL}/v1/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
        body: {
            username,
            passphrase,
        },
    });

    console.log(res);
    return await res.json();
};

const logout = async () => {
    const res = await fetch(`${BASE_URL}/v1/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
    });

    console.log(res);
    return await res.json();
};

const getConfig = async () => {
    const res = await fetch(`${BASE_URL}/v1/config`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
    });

    console.log(res);
    return await res.json();
};

const updateConfig = async (electrum_url) => {
    const res = await fetch(`${BASE_URL}/v1/config`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `macaroon=${MACAROON}; token=${TOKEN}`
        },
        credentials: 'include',
        body: {
            electrum_url,
        },
    });

    console.log(res);
    return await res.json();
};

module.exports = {
    initSensei,
    listNodes,
    createNode,
    startNode,
    stopNode,
    deleteNode,
    nodeStatus,
    startSensi,
    login,
    logout,
    getConfig,
    updateConfig,
};
