const debug = require('../../utils/debug');
const senseiNodes = require('../../sensei/nodes');
const accounts = require('../../db/collection');

const getAccountAllowance = async (username) => {
    try {
        // get allowance from firestore
        return { success: true, message: nodes };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const getAccountBalance = async () => {
    try {
        const response = await senseiNodes.getBalance();
        return { success: true, message: response.balance_satoshis };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const payInvoice = async (invoice) => {
    try {
        const response = await senseiNodes.payInvoice(invoice);
        return { success: true, message: response };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const createInvoice = async (amountMillisats, description) => {
    try {
        const response = await senseiNodes.createInvoice(amountMillisats, description);
        return { success: true, message: response };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

module.exports = { getAccountAllowance, payInvoice, createInvoice, getAccountBalance };
