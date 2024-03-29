const { Router } = require('express');
const auth = require('../middlewares/auth');
const comments = require('../routes/comments');
const commentBoxes = require('../routes/commentBoxes');
const departments = require('../routes/departments');
const boards = require('../routes/boards');
const files = require('../routes/files');
const posts = require('../routes/posts');
const users = require('../routes/users');

const router = Router();

const pong = (req, res) => res.send('pong');

router.use(auth);

router.use('/boards', boards);
router.use('/comments', comments);
router.use('/commentboxes', commentBoxes);
router.use('/departments', departments);
router.use('/files', files);
router.use('/posts', posts);
router.use('/users', users);

router.get('/ping', pong);

module.exports = router;
