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

module.exports = { getAccountAllowance };
