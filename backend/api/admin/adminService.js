const debug = require('../../utils/debug');
const collection = require('../../db/collection');
const senseiAdmin = require('../../sensei/admin');
const senseiNodes = require('../../sensei/nodes');

const DOC_NAME = 'nicks-family';
const MEMBERS_SUBCOLLECTION_NAME = 'members';

const getAllBalances = async (req, res) => {
    try {
        const response = await senseiAdmin.listNodes();
        let nodes = [];
        for (let node of response.nodes) {
            node.balance = (await senseiNodes.getBalance()).balance_satoshis;
            nodes.push(node);
        }
        return { success: true, message: nodes };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const updatePermissions = async (accountName, newPermissions) => {
    const docRef = await collection.doc(DOC_NAME).collection(MEMBERS_SUBCOLLECTION_NAME).doc(accountName);
    const doc = await docRef.get();
    if (!doc.exists) {
        const errMsg = `Firestore document "${docName}/${subcollectionName}/${accountName}" does not exist in the families collection`;
        debug.error(errMsg);
        throw new Error(errMsg);
    }

    // TODO: Error handling?
    await docRef.update({permissions: newPermissions});
    return { success: true };
};

const setAccountAllowance = async (accountName, newAllowance) => {
    const docRef = await collection.doc(DOC_NAME).collection(MEMBERS_SUBCOLLECTION_NAME).doc(accountName);
    const doc = await docRef.get();
    if (!doc.exists) {
        const errMsg = `Firestore document "${docName}/${subcollectionName}/${accountName}" does not exist in the families collection`;
        debug.error(errMsg);
        throw new Error(errMsg);
    }

    // TODO: Error handling?
    await docRef.update({ allowance: newAllowance, "permissions.hasAllowance": true });
    return { success: true };
};

module.exports = { getAllBalances, updatePermissions, setAccountAllowance };
