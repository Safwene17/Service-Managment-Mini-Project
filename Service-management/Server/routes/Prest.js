const express = require('express');
const router = express.Router();
const {registerPrest ,loginPrest} = require('../Controller/loginPrest');
router.post('/register', registerPrest);
router.post('/login', loginPrest);



module.exports = router;
