const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')

//test 

let length = function (text) {
    return text.length <= 280 
}

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validate: [length, 'Please enter thought between 1-280 characters'],
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
        //reactionCount: [{type: Schema.Types.ObjectId, ref: 'reaction'}],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought