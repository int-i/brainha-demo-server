const { Router } = require('express');
const boards = require('../controllers/boards');

const router = Router();

router.get('/', boards.getBoards);
router.get('/:id', boards.getBoard);

module.exports = router;
