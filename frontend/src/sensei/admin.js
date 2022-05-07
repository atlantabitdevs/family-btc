const fetch = require('node');
const BASE_URL = process.env.BASE_URL;

const InitSensei = async (username, passphrase, alias, electrum_url, start) => {
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

const ListNodes = async (page, take, query) => {
    const res = await fetch(`${BASE_URL}/v1/nodes`, {
        method: 'GET',
    });

    console.log(res);
    return await res.json();
};

const CreateNode = async (username, passphrase, alias, start) => {
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

const StartNode = async (pubkey, passphrase) => {
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

const StopNode = async (pubkey) => {
    const res = await fetch(`${BASE_URL}/v1/nodes/stop`, {
        method: 'POST',
        body: {
            pubkey,
        },
    });

    console.log(res);
    return await res.json();
};

const DeleteNode = async (pubkey) => {
    const res = await fetch(`${BASE_URL}/v1/nodes/delete`, {
        method: 'POST',
        body: {
            pubkey,
        },
    });

    console.log(res);
    return await res.json();
};

const NodeStatus = async () => {
    const res = await fetch(`${BASE_URL}/v1/status`, {
        method: 'GET',
    });

    console.log(res);
    return await res.json();
};

const StartSensi = async (passphrase) => {
    const res = await fetch(`${BASE_URL}/v1/start`, {
        method: 'POST',
        body: {
            passphrase,
        },
    });

    console.log(res);
    return await res.json();
};

const Login = async (username, passphrase) => {
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

const Logout = async () => {
    const res = await fetch(`${BASE_URL}/v1/logout`, {
        method: 'POST',
    });

    console.log(res);
    return await res.json();
};

const GetConfig = async () => {
    const res = await fetch(`${BASE_URL}/v1/config`, {
        method: 'GET',
    });

    console.log(res);
    return await res.json();
};

const UpdateConfig = async (electrum_url) => {
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
    InitSensei,
    ListNodes,
    CreateNode,
    StartNode,
    StopNode,
    DeleteNode,
    NodeStatus,
    StartSensi,
    Login,
    Logout,
    GetConfig,
    UpdateConfig,
};
