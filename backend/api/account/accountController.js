const debug = require('../../utils/debug');
const accountService = require('./accountService');

const getAccountAllowance = async (req, res) => {
    try {
        // TODO: Input verification logic?
        const accountName = req.params.username;
        const response = await accountService.getAccountAllowance(accountName);
        debug.info(`Response for getting an account's allowance: ${JSON.stringify(response)}`);

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

const getAccountPermissions = async (req, res) => {
    try {
        // TODO: Input verification logic?
        const accountName = req.params.username;
        const response = await accountService.getAccountPermissions(accountName);
        debug.info(`Response for getting an account's permissions: ${JSON.stringify(response)}`);

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

module.exports = { getAccountAllowance, payInvoice, createInvoice, getAccountBalance, getAccountPermissions };
