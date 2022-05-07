const express = require('express');
const router = express();

const { getNodeAllowance } = require('./nodeController');


router.get('/allowance', getNodeAllowance);

module.exports = router;
