const express = require('express');
const router = express();

const { getAllowance } = require('./node');


router.get('/allowance', getAllowance);

module.exports = router;
