const { Router } = require('express');
const posts = require('../controllers/posts');

const router = Router();

router.get('/', posts.getPosts);
router.get('/:id', posts.getPost);

module.exports = router;
