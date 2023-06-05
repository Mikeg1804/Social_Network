const {createUser} = require('../../../controllers/userController');

const router = require('express').Router();

router.post('/', createUser);

module.exports = router;