const debug = require('../../utils/debug');
const nodeService = require('./nodeService');

const getAllowance = async (req, res) => {
    try {
        const amount = req.body.amount;
        const memo = req.body.memo;
        const response = await nodeService.getAllowance(amount, memo);

        debug.info(`Invoice Creation Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const checkInvoice = async (req, res) => {
    try {
        const id = req.body.id
        const response = await nodeService.checkInvoice(id);

        debug.info(`Invoice Creation Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { createInvoice, checkInvoice };
