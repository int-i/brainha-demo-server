const { Router } = require('express');
const comments = require('../controllers/comments');

const router = Router();

router.get('/', comments.getComments);
router.get('/:id', comments.getComment);

module.exports = router;
