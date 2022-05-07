const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;

const initSensei = async (username, passphrase, alias, electrum_url, start) => {
    const res = await fetch(`${BASE_URL}/v1/init`, {
        method: 'POST',
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
    const res = await fetch(`${BASE_URL}/v1/nodes`, {
        method: 'GET',
    });

    console.log(res);
    return await res.json();
};

const createNode = async (username, passphrase, alias, start) => {
    const res = await fetch(`${BASE_URL}/v1/nodes`, {
        method: 'POST',
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
    });

    console.log(res);
    return await res.json();
};

const startSensi = async (passphrase) => {
    const res = await fetch(`${BASE_URL}/v1/start`, {
        method: 'POST',
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
    });

    console.log(res);
    return await res.json();
};

const getConfig = async () => {
    const res = await fetch(`${BASE_URL}/v1/config`, {
        method: 'GET',
    });

    console.log(res);
    return await res.json();
};

const updateConfig = async (electrum_url) => {
    const res = await fetch(`${BASE_URL}/v1/config`, {
        method: 'POST',
        body: {
            electrum_url,
        },
    });

    console.log(res);
    return await res.json();
};

export {
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
