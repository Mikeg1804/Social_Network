const {createUser, getUser, getAllUsers, deleteUser, addFriend, removeFriend} = require('../../../controllers/userController');

const router = require('express').Router();


router.post('/', createUser);

// the userName parameter added to this route is the same one withing the getUser function
router.get('/:userName', getUser);
router.get('/', getAllUsers);
router.post('/follower/:friend', addFriend);
router.put('/', deleteUser);
router.put('/follower/:friend', removeFriend);

module.exports = router;