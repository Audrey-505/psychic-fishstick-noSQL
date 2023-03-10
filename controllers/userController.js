const { ObjectId } = require('mongoose').Types
const { User, Thought } = require('../models')

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            //.populate('thoughts')
            .lean()
            .then(async (user) =>
                !user
                    ? res.status(404).json({ messsage: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err)
            })
    },
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Thought.findOneAndUpdate(
                        { users: req.params.userId },
                        { $pull: { users: req.params.userId } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'User deleted but no thoughts found',
                    })
                    : res.json({ message: 'User deleted' })
            )
            .catch((err) => res.status(500).json(err))
    },
    addFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$push: {friends: req.params.friendId}}
        )
        .then((friendData) => {
            if(!friendData){
                return res.status(404).json({message: 'no friend with that ID found'})
            }
            res.json({message: 'friend added successfully!'})
        })
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
        })
    },

    delFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId }}
        )
        .then((friendData) => {
            if(!friendData){
                return res.status(404).json({message: 'no friend with that ID found'})
            }
            res.json({message: 'friend removed!'})
        })
        .catch((err) => res.json(err))
    }
}