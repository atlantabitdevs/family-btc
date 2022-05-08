const express = require('express');
const router = express();

const { getAllBalances, addNewAccount, keysend, updatePermissions, setAccountAllowance } = require('./adminController');

router.get('/balances', getAllBalances);
router.post('/add', addNewAccount);
router.post('/transfer', keysend);
router.post('/permissions', updatePermissions)
router.post('/allowance', setAccountAllowance)

module.exports = router;
