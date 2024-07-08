const express = require('express');
const router = express.Router();

const { findUser} = require('../controller/register.controller');

router.post('/', findUser);

module.exports = router;