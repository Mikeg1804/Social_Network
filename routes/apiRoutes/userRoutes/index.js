const {createUser, getUser, getAllUsers, deleteUser, addFriend, removeFriend} = require('../../../controllers/userController');

const router = require('express').Router();


router.post('/', createUser);

// this route works
router.get('/:userId', getUser);
// this route works
router.get('/', getAllUsers);
// this route works
router.put('/:userId', deleteUser);
// need help with those two routes
router.put('/friend/:userId/:friendId', addFriend);
router.delete('/friend/:userId/:friendId', removeFriend);

module.exports = router;