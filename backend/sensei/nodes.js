const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;

const getUnusedAddress = async () => {
    const res = await fetch(`${BASE_URL}/v1/node/wallet/address`, {
        method: 'GET'
    });
    console.log(res);
    return await res.json();
}

const getBalance = async () => {
    const res = await fetch(`${BASE_URL}/v1/node/wallet/balance`, {
        method: 'GET'
    });
    console.log(res);
    return await res.json();
}

const getChannels = async ({ page, searchTerm, take }) => {
    const { channels, pagination } = await fetch(
        `${BASE_URL}/v1/node/channels?page=${page}&take=${take}&query=${searchTerm}`, {
        method: 'GET'
    });

    return await channels;
}

const getPayments = async ({ filter = {}, pagination }) => {
    const { page, take, } = pagination;

    const res = await fetch(
        `${BASE_URL}/v1/node/payments?page=${page}&take=${take}`,
    );

    return {
        pagination: res.pagination,
        payments: res.payments.map((payment) => {
            return {
                id: payment.id,
                paymentHash: payment.payment_hash,
                preimage: payment.preimage,
                secret: payment.secret,
                status: payment.status,
                origin: payment.origin,
                amtMsat: payment.amt_msat,
                createdAt: payment.created_at,
                updatedAt: payment.updated_at,
                label: payment.label,
                invoice: payment.invoice,
            };
        }),
    };
}

const getInfo = async () => {
    const { node_info } = await fetch(`${BASE_URL}/v1/node/info`);

    return {
        version: node_info.version,
        nodePubkey: node_info.node_pubkey,
        numChannels: node_info.num_channels,
        numUsableChannels: node_info.num_usable_channels,
        numPeers: node_info.num_peers,
        localBalanceMsat: node_info.local_balance_msat,
    };
}

const getPeers = async () => {
    const { peers } = await fetch(`${BASE_URL}/v1/node/peers`);

    return {
        peers: peers.map((peer) => {
            return {
                nodePubkey: peer.node_pubkey,
            };
        }),
    };
}