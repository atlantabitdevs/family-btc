const debug = require('../../utils/debug');
const adminService = require('./adminService');
const senseiAdmin = require('../../sensei/admin');
const senseiNodes = require('../../sensei/nodes');

const getAllBalances = async (req, res) => {
    try {
        const response = await senseiAdmin.listNodes();
        let nodesBalances = []
        for(let node of response.nodes){
            node.balance = await senseiNodes.getBalance(node.username);
            nodesBalances.push(node)
        }

        debug.info(`Admin All Balances Response: ${nodesBalances}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const addNewAccount = async (req, res) => {
    try {
        const username = req.body.username;
        const passphrase = req.body.passphrase;
        // add to DB?
        const alias = req.body.alias;
        const start = req.body.start;
        const response = await senseiAdmin.createNode(username, passphrase, alias, start)

        debug.info(`Add Account / Create Node Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
}

const keysend = async (req, res) => {
    try {
        const destPubkey = req.body.destPubkey;
        const amtMsat = req.body.amtMsat;
        const response = await senseiNodes.keysend(destPubkey, amtMsat);
        debug.info(`Admin Keysend Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
}

module.exports = { getAllBalances, addNewAccount, keysend };
