const {createThought, getThought, getAllThought , deleteThought, addReaction, removeReaction } = require('../../../controllers/thoughtController');

const router = require('express').Router();


router.post('/', createThought);


router.get('/:thoughtId', getThought);
router.get('/', getAllThought);
router.put('/:thoughtId', deleteThought);
router.post('/reaction/:thoughtId', addReaction);
// router.put('/reaction/:thoughtId/:reactionId', removeReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;