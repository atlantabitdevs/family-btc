const debug = require('../../utils/debug');
const accounts = require('../../db/collection');
const senseiAdmin = require('../../sensei/admin');
const senseiNodes = require('../../sensei/nodes');

const getAllBalances = async (req, res) => {
    try {
        const response = await senseiAdmin.listNodes();
        let nodes = [];
        for (let node of response.nodes) {
            node.balance = await senseiNodes.getBalance(node.username);
            nodes.push(node);x
        }
        return { success: true, message: nodes };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

module.exports = { getAllBalances };
