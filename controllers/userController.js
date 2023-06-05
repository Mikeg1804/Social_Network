const {User} = require('../model');

const createUser = async (req, res) => {
    const{firstName, lastName, userName, email, password,} = req.body;

    try {
        const newUser = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password,
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {createUser};