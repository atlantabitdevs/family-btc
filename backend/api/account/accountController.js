const debug = require('../../utils/debug');
const accountService = require('./accountService');

const getAccountAllowance = async (req, res) => {
    try {
        const username = req.body.username;
        const response = await accountService.getAccountAllowance(username);
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
        const invoice = req.body.invoice;
        const response = await accountService.payInvoice(invoice);

        debug.info(`Pay Invoice Response: ${JSON.stringify(response)}`);
        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const getAccountBalance = async (req, res) => {
    try {
        const response = await accountService.getAccountBalance();

        debug.info(`Account Balance Response: ${JSON.stringify(response)}`);
        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const createInvoice = async (req, res) => {
    try {
        const amountMillisats = req.body.amountMillisats;
        const description = req.body.description;
        const response = await accountService.createInvoice(amountMillisats, description);
        debug.info(`Create Invoice Response: ${JSON.stringify(response)}`);
        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { getAccountAllowance, payInvoice, createInvoice, getAccountBalance };
