const debug = require('../../utils/debug');
const accountService = require('./accountService');

const getAccountBalance = async (req, res) => {
    try {
        const username = req._parsedUrl.query.split('=')[1];
        username, passphrase, alias, start
        const response = await accountService.getAccountBalance(username);

        debug.info(`Invoice Creation Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { getAccountBalance };