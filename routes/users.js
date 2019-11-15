const { Router } = require('express');
const users = require('../controllers/users');

const router = Router();

router.post('/', users.createUser);
router.get('/', users.getUsers);
router.get('/:sid', users.getUser);
router.patch('/:sid', users.updateUser);
router.delete('/:sid', users.disableUser);
router.post('/auth', users.login);
router.post('/subscription', users.subscript);
router.get('/subscription', users.getSubscription);
router.delete('/subscription', users.unsubscript);

module.exports = router;
