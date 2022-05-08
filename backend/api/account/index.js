const express = require('express');
const router = express();

const { getAccountAllowance, payInvoice, createInvoice, getAccountBalance } = require('./accountController');

router.get('/account/balance', getAccountBalance);
router.get('/allowance', getAccountAllowance);
router.get('/payment/send', payInvoice);
router.get('/payment/receive', createInvoice);

module.exports = router;
