const debug = require('../../utils/debug');
const sensei = require('../../sensei/admin');

const getAllowance = async (amount, memo) => {
    try {
        const allowance = await sensei.getAllowance({
            amount: amount,
            currency: 'USD',
            description: JSON.stringify(memo)
        });
        return { success: true, message: charge };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

module.exports = { getAllowance };
