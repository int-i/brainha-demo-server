const { Router } = require('express');
const subscriptions = require('../controllers/subscriptions');

const router = Router();

router.get('/', subscriptions.getSubscriptions);
router.get('/:id', subscriptions.getSubscription);

module.exports = router;
