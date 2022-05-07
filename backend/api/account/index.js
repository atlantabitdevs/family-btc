const express = require('express');
const router = express();

const { getAccountBalance } = require('./accountController');

router.get('/allowance', getAccountBalance);

module.exports = router;
