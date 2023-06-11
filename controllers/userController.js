const {User} = require('../model');

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(
        req.body
        );
        res.json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findOne(
            {
        _id: req.params.userId,
        }
        ).select('-__V').populate('friends').populate('thoughts')
        res.json(user);    
    } catch (error) {
        res.status(500).json(error);  
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-__V')
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};


const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete(
            {
       _id: req.params.userId,
        }
        ); 
        res.json(user);    
    } catch (error) {
        res.status(500).json(error);  
    }
};


const addFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            {
            _id: req.params.userId,
            }, 
            {
             $addToSet: { friends: req.params.friendId } 
            }, { new: true })
        res.json(user);    
    } catch (error) {
        res.status(500).json(error);  
    } 
};

const removeFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            {
            _id: req.params.userId,
            }, 
            {
             $pull: { friends: req.params.friendId } 
            }, { new: true })
        res.json(user);    
    } catch (error) {
        res.status(500).json(error);  
    } 
};

module.exports = {createUser, getUser, getAllUsers, deleteUser, addFriend, removeFriend
};

