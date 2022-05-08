const debug = require('../../utils/debug');
const senseiNodes = require('../../sensei/nodes');
const collection = require('../../db/collection');

const DOC_NAME = 'nicks-family';
const MEMBERS_SUBCOLLECTION_NAME = 'members';

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

const getAccountPermissions = async (accountName) => {
    const docRef = await collection.doc(DOC_NAME).collection(MEMBERS_SUBCOLLECTION_NAME).doc(accountName);
    const doc = await docRef.get();
    if (!doc.exists) {
        const errMsg = `Firestore document "${docName}/${subcollectionName}/${accountName}" does not exist in the families collection`;
        debug.error(errMsg);
        throw new Error(errMsg);
    }

    // TODO: Error handling?
    const permissions = doc.data().permissions;
    return { success: true, permissions };
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

module.exports = { getAccountAllowance, payInvoice, createInvoice, getAccountBalance, getAccountPermissions  };
