const router = require('express').Router()

const {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    addFriend,
    delFriend,
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete(delFriend)

module.exports = router 
