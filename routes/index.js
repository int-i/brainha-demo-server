const { Router } = require('express');
const auth = require('../middlewares/auth');
const departments = require('../routes/departments');
const files = require('../routes/files');
const users = require('../routes/users');

const router = Router();

const pong = (req, res) => res.send('pong');

router.use(auth);

router.use('/departments', departments);
router.use('/files', files);
router.use('/users', users);

router.get('/ping', pong);

module.exports = router;
