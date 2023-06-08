const {User} = require('../model');

const createUser = async (req, res) => {
    const{ userName, email, password, firstName, lastName} = req.body;

    try {
        const newUser = await User.create(
            {
        userName,
        email,
        password,
        firstName,
        lastName,
        }
        // req.body
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
        userName: req.params.userName,
        }
        ); 
        res.json(user);    
    } catch (error) {
        res.status(500).json(error);  
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = {createUser, getUser, getAllUsers};

