const { Schema, model } = require('mongoose')



let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address'],
        },
        thoughts: [{type:Schema.Types.ObjectId, ref: 'thought'}],
        friends: [{type:Schema.Types.ObjectId, ref: 'user'}],
    },
    {
        toJSON: {
            getters: true,
        },
    }
)

const User = model('user', userSchema)

module.exports = User