const {User, Thought,} = require('../model');

const createThought = async (req, res) => {

    try {
        const newThought = await Thought.create(
        req.body
        );
        User.findOneAndUpdate({_id: req.body.userId}, {$push:{thoughts: newThought._id}}, {new: true})
        res.json(newThought);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getThought = async (req, res) => {
    try {
        const thought = await Thought.findOne(
            {
        _id: req.params.thoughtId,
        }
        )
        res.json(thought);    
    } catch (error) {
        res.status(500).json(error);  
    }
};

const getAllThought = async (req, res) => {
    try {
        const thought = await Thought.find().sort({createdAt:-1})
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};


const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndDelete(
            {
       _id: req.params.thoughtId,
        }
        ); 
        User.findOneAndUpdate({thoughts: req.params.thoughtId}, {$pull:{thoughts: req.params.thoughtid}}, {new: true})
        res.json(thought);    
    } catch (error) {
        res.status(500).json(error);  
    }
};


const addReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate(
            {
            _id: req.params.thoughtId,
            }, 
            {
             $addToSet: { reactions: req.body } 
            }, 
            { runValidators: true, new: true }
            )
        res.json(reaction);    
    } catch (error) {
        res.status(500).json(error);  
    } 
};

const removeReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate(
            {
            _id: req.params.thoughtId,
            }, 
            {
             $pull: { reactions: req.params.reactionId } 
            }, { new: true })
        res.json(reaction);    
    } catch (error) {
        res.status(500).json(error);  
    } 
};

module.exports = {createThought, getThought, getAllThought , deleteThought, addReaction, removeReaction 
};

