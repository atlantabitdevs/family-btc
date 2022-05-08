const debug = require('../../utils/debug');
const collection = require('../../db/collection');
const senseiAdmin = require('../../sensei/admin');
const senseiNodes = require('../../sensei/nodes');

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
    const docName = 'nicks-family';
    const subcollectionName = 'members';
    const docRef = await collection.doc(docName).collection(subcollectionName).doc(accountName);
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

module.exports = { getAllBalances, updatePermissions };
