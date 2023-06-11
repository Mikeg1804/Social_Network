const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        trimmed: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        lowercase: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }],
},
{
 toJSON: {
    virtuals: true,
 },
 id: false   
}
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
});


const User = model('User', userSchema);



module.exports = User;

 