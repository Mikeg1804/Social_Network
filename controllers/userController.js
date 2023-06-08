const {User} = require('../model');

const createUser = async (req, res) => {
    const{userName, email, password, firstName, lastName} = req.body;

    try {
        const newUser = await User.create({
        userName,
        email,
        password,
        firstName,
        lastName,
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {createUser};