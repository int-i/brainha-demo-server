const { Router } = require('express');
const categories = require('../controllers/categories');

const router = Router();

router.get('/', categories.getCategories);
router.get('/:id', categories.getCategory);

module.exports = router;
