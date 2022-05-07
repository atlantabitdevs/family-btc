const debug = require('../../utils/debug');
const accountService = require('./accountService');

const getAccountBalance = async (req, res) => {
    try {
        const username = req.params.username;
        const response = await accountService.getAccountBalance(username);
        if (!response.success) {
            res.status(500).json(response.message);
        } else {
            res.status(200).json(response.message);
        }
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { getAccountBalance };
