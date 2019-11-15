const { Router } = require('express');
const tags = require('../controllers/tags');

const router = Router();

router.get('/', tags.getTags);
router.get('/:id', tags.getTag);

module.exports = router;
