const router = require('express').Router()

const {
    getUsers,
    getUser,
    createUser,
    deleteUser,
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getUser).delete(deleteUser)

module.exports = router 
