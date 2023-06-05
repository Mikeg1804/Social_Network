const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minLength: 2,
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minLength: 2,
    },
    bio: {
        type: String,
        default: '',
    },
    profilePicture: {
        type: String,
        // or try 'default-profile-picture.jpg'
        default: 'default-image.jpg',
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },

});


module.exports = model('User', userSchema);

 