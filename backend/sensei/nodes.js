const { apiCall } = require('../utils/apiCall');

const getUnusedAddress = async () => {
    const { address } = await apiCall('/v1/node/wallet/address', 'GET')
    return await address.json();
}

const getBalance = async () => {
    const balance = await apiCall('/v1/node/wallet/balance', 'GET')
    return await balance.json();
}

const getChannels = async ({ page, searchTerm, take }) => {
    const { channels, pagination } = await apiCall(`/v1/node/channels?page=${page}&take=${take}&query=${searchTerm}`, 'GET')
    return await channels.json();
}

const getPayments = async (page, take) => {
    const { payments } = await apiCall(`/v1/node/payments?page=${page}&take=${take}`, 'GET')
    return await payments.json();
}

const getInfo = async () => {
    const { node_info } = await apiCall(`/v1/node/payments?page=${page}&take=${take}`, 'GET')

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
    const { peers } = await apiCall('/v1/node/peers', 'GET')
    return await peers.json();
}

const stopNode = async () => {
    const res = await apiCall('/v1/node/stop', 'GET');
    return res.json();
}

const createInvoice = async (amountMillisats, description) => {
    const res = await apiCall('/v1/node/invoices', 'POST', { amt_msat: amountMillisats, description });
    return await res.json();
}

const payInvoice = async (invoice) => {
    const res = await apiCall('/v1/node/invoices/pay', 'POST', { invoice });
    return await res.json();
}

<<<<<<< HEAD
const keysend = async (destPubkey, amtMsat) => {
    const res = await apiCall('/v1/node/invoices/pay', 'POST', { dest_pubkey: destPubkey, amt_msat: amtMsat });
    return await res.json();
=======
const keySend = async (destPubkey, amtMsat) => {
    const res = await fetch(`${BASE_URL}/v1/node/keysend`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                dest_pubkey: destPubkey,
                amt_msat: amtMsat
            })
        }
    );
>>>>>>> e295aada2015b250764e2aa5e1db0e8d8a7f6d24
}


module.exports = {
    getUnusedAddress,
    getBalance,
    getChannels,
    getPayments,
    getInfo,
    getPeers,
    stopNode,
    createInvoice,
    payInvoice,
    keySend,
}