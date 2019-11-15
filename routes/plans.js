const { Router } = require('express');
const plans = require('../controllers/plans');

const router = Router();

router.get('/', plans.getPlans);
router.get('/:id', plans.getPlan);

module.exports = router;
