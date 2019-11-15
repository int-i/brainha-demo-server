const { Router } = require('express');
const users = require('../controllers/users');

const router = Router();

router.post('/auth', users.login);

module.exports = router;
