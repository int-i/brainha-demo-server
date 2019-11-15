const { Router } = require('express');
const posts = require('../controllers/posts');

const router = Router();

router.get('/', posts.getPosts);
router.get('/:id', posts.getPost);
router.patch('/:id', posts.updatePost);
router.delete('/:id', posts.hidePost);
router.post('/:id/commentboxes', posts.writeCommentBox);
router.get('/:id/commentboxes', posts.getCommentBoxes);
router.post('/:id/comments', posts.writeComment);
router.get('/:id/comments', posts.getComments);
router.post('/:id/likes', posts.like);
router.get('/:id/likes', posts.checkLikes);

module.exports = router;
