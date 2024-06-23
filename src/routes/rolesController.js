const express = require('express')
const { createRoles, getAllRoles } = require('../controllers/rolesController')
const verifyToken = require('../middleware/verifyToken')
const checkRole = require('../middleware/checkRole')

const RolesRoutes  = express.Router()

RolesRoutes.post('/role',verifyToken,checkRole(1),createRoles)
RolesRoutes.get('/roles',verifyToken,checkRole(1),getAllRoles)

module.exports = { RolesRoutes }