const express = require('express');
const router = express();

const { getAccountAllowance } = require('./accountController');

router.get('/allowance', getAccountAllowance);

module.exports = router;
