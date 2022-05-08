const debug = require('../../utils/debug');
const adminService = require('./adminService');
const senseiAdmin = require('../../sensei/admin');
const senseiNodes = require('../../sensei/nodes');

const getAllBalances = async (req, res) => {
    try {
        const response = await adminService.getAllBalances();
        debug.info(`Admin All Balances Response: ${JSON.stringify(response)}`);
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

// Request body:
// ```
// {
//   permissions: {
//     isAdmin: boolean,
//     hasAllowance: boolean,
//     canSpend: boolean,
//   }
// }
// ```
const updatePermissions = async (req, res) => {
    try {
        // TODO: Input verification logic?
        const accountName = req.params.username;
        const newPermissions = req.body.permissions;
        const response = await adminService.updatePermissions(accountName, newPermissions);
        debug.info(`Response for updating a family member's permissions: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

// Request body:
// ```
// {
//   accountName: string,
//   allowance: number,
// }
// ```
const setAccountAllowance = async (req, res) => {
    try {
        // TODO: Input verification logic?
        const accountName = req.body.accountName;
        const newAllowance = req.body.allowance;
        const response = await adminService.setAccountAllowance(accountName, newAllowance);
        debug.info(`Response for updating a family member's permissions: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { getAllBalances, addNewAccount, keysend, updatePermissions, setAccountAllowance };
