const { Router } = require('express');
const commentBoxes = require('../controllers/commentBoxes');

const router = Router();

router.get('/', commentBoxes.getCommentBoxes);
router.get('/:id', commentBoxes.getCommentBox);
router.patch('/:id', commentBoxes.updateCommentBox);
router.delete('/:id', commentBoxes.hideCommentBox);
router.post('/:id/comments', commentBoxes.writeComment);
router.get('/:id/comments', commentBoxes.getComments);
router.post('/:id/likes', commentBoxes.like);
router.get('/:id/likes', commentBoxes.checkLikes);

module.exports = router;
