const { Router } = require('express');

const router = Router();

const pong = (req, res) => res.send('pong');

router.get('/ping', pong);

module.exports = router;
