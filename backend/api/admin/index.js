const express = require('express');
const router = express();

const { getAllBalances } = require('./adminController');

router.get('/details', getAllBalances);

module.exports = router;
