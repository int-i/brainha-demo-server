const { Router } = require('express');
const boards = require('../controllers/boards');

const router = Router();

router.post('/', boards.createBoard);
router.get('/', boards.getBoards);
router.get('/:id', boards.getBoard);
router.patch('/:id', boards.updateBoard);
router.delete('/:id', boards.disableBoard);
router.post('/:id/posts', boards.writePost);
router.get('/:id/posts', boards.getPosts);

module.exports = router;
