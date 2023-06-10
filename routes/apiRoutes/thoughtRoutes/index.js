const {createThought, getThought, getAllThought , deleteThought, addReaction, removeReaction } = require('../../../controllers/thoughtController');

const router = require('express').Router();


router.post('/', createThought);


router.get('/', getThought);
router.get('/', getAllThought);
router.put('/', deleteThought);
router.post('/reaction', addReaction);
router.put('/reaction', removeReaction);


module.exports = router;