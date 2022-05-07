const express = require('express');
const router = express();

const { getAccountAllowance } = require('./accountController');

router.get('/allowance', getAccountAllowance);
router.get('/payment/send', );
router.get('/payment/receive', );

module.exports = router;
