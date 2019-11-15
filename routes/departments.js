const { Router } = require('express');
const departments = require('../controllers/departments');

const router = Router();

router.get('/', departments.getDepartments);
router.get('/:id', departments.getDepartment);

module.exports = router;
