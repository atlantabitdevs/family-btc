const express = require('express');
const router = express();

const { getAllBalances, addNewAccount, keysend, updatePermissions, setAccountAllowance } = require('./adminController');

router.get('/balances', getAllBalances);
router.post('/add', addNewAccount);
router.post('/transfer', keysend);
router.post('/account/:username/permissions', updatePermissions)
router.post('/account/:username/allowance', setAccountAllowance)

module.exports = router;
