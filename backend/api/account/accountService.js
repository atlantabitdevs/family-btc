const debug = require('../../utils/debug');
const senseiAdmin = require('../../sensei/admin');

const getAccountBalance = async (username) => {
    // TODO: Determine whether to fetch this info from sensei or from Firestore,
    // and actually go get it from there.
    try {
        return { success: true, message: 42 };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

module.exports = { getAccountBalance };
