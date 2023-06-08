const {createUser, getUser, getAllUsers} = require('../../../controllers/userController');

const router = require('express').Router();


router.post('/', createUser);
router.get('/singleuser', getUser);
router.get('/users', getAllUsers);

module.exports = router;