const express = require('express')
const { createUser, getAllUser, getUserById } = require('../controllers/userController')

const UserRouter  = express.Router()

UserRouter.post('/user',createUser)
UserRouter.get('/users',getAllUser)
UserRouter.get('/user/:id',getUserById)

module.exports = { UserRouter }