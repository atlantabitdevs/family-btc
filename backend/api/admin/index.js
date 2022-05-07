const express = require('express');
const router = express();

const { getAllBalances, addNewAccount, keysend } = require('./adminController');

router.get('/balances', getAllBalances);
router.post('/add', addNewAccount);
router.post('/transfer', keysend);

module.exports = router;
