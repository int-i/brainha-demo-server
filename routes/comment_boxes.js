const { Router } = require('express');
const comment_boxes = require('../controllers/comment_boxes');

const router = Router();

router.get('/', comment_boxes.getComment_boxes);
router.get('/:id', comment_boxes.getComment_box);

module.exports = router;
