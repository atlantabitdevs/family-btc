const debug = require('../../utils/debug');
const accountService = require('./accountService');

const getAccountAllowance = async (req, res) => {
    try {
        const response = await accountService.getAccountAllowance();

        debug.info(`Account Allowance Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const payInvoice = async (req, res) => {
    try {
        const response = await accountService.getAccountAllowance();

        debug.info(`Account Allowance Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const createInvoice = async (req, res) => {
    try {
        const response = await accountService.getAccountAllowance();

        debug.info(`Account Allowance Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { getAccountAllowance, payInvoice, createInvoice };
