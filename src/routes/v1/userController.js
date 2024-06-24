const express = require('express');
const verifyToken = require('../../middleware/verifyToken');
const checkRole = require('../../middleware/checkRole');
const { createUser, getAllUser, getUserById } = require('../../controllers/userController');


const UserRouter  = express.Router()

UserRouter.post('/create-user', verifyToken, checkRole(1), createUser);
UserRouter.get('/users',getAllUser)
UserRouter.get('/user/:id',getUserById)

module.exports = { UserRouter }