const debug = require('../../utils/debug');
const senseiAdmin = require('../../sensei/admin');
const accounts = require('../../db/collection');

const getAccountAllowance = async (username) => {
    try {
        // get allowance from firestore
        return { success: true, message: charge };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

const payInvoice = async (req, res) => {
    try {
        const response = await accountService.getAccountAllowance();

        debug.info(`Account Allowance Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const createInvoice = async (req, res) => {
    try {
        const response = await accountService.getAccountAllowance();

        debug.info(`Account Allowance Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { getAccountAllowance, payInvoice, createInvoice };
