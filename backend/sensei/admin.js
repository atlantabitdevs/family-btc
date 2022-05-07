const { apiCall } = require('../utils/apiCall');

const initSensei = async (username, passphrase, alias, electrum_url, start) => {
    const res = await apiCall('/v1/init', 'POST', {
        username,
        passphrase,
        alias,
        electrum_url,
        start,
    });
    return await res.json();
};

const listNodes = async (page, take, query) => {
    const res = await apiCall('/v1/nodes?page=${0}&take=${10}', 'GET');
    return await res.json();
};

const createNode = async (username, passphrase, alias, start) => {
    const res = await apiCall('/v1/nodes', 'POST', {
        username,
        passphrase,
        alias,
        start,
    });
    return await res.json();
};

const startNode = async (pubkey, passphrase) => {
    const res = await apiCall('/v1/nodes/start', 'POST', { pubkey, passphrase });
    return await res.json();
};

const stopNode = async (pubkey) => {
    const res = await apiCall('/v1/nodes/stop', 'POST', { pubkey });
    return await res.json();
};

const deleteNode = async (pubkey) => {
    const res = await apiCall('/v1/nodes/delete', 'POST', { pubkey });
    return await res.json();
};

const nodeStatus = async () => {
    const res = await apiCall('/v1/status', 'GET');
    return await res.json();
};

const startSensi = async (passphrase) => {
    const res = await apiCall('/v1/start', 'POST', { passphrase });
    return await res.json();
};

const login = async (username, passphrase) => {
    const res = await apiCall('/v1/login', 'POST', { username, passphrase });
    return await res.json();
};

const logout = async () => {
    const res = await apiCall('/v1/logout', 'POST');
    return await res.json();
};

const getConfig = async () => {
    const res = await apiCall('/v1/config', 'GET');
    return await res.json();
};

const updateConfig = async (electrum_url) => {
    const res = await apiCall('/v1/config', 'POST', { electrum_url });
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
