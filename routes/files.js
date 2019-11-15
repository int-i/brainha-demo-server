const express = require('express');
const path = require('path');
const files = require('../controllers/files');

const { Router } = express;
const router = Router();

router.use('/', express.static(path.join(__dirname, '../static')));
router.post('/', files.uploadFile);

module.exports = router;
