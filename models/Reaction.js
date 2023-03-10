const { Schema, Types } = require('mongoose')

const moment = require('moment');

let length = function (text) {
    return text.length <= 280 
}

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            validate: [length, 'max length 280 characters'],
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)

module.exports = reactionSchema