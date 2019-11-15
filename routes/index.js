const { Router } = require('express');
const auth = require('../middlewares/auth');
const files = require('../routes/files');
const users = require('../routes/users');

const router = Router();

const pong = (req, res) => res.send('pong');

router.use(auth);

router.use('/users', users);
router.use('/files', files);

router.get('/ping', pong);

module.exports = router;
