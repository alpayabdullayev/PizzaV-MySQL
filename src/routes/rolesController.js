const express = require('express')
const { createRoles, getAllRoles } = require('../controllers/rolesController')

const RolesRoutes  = express.Router()

RolesRoutes.post('/role',createRoles)
RolesRoutes.get('/roles',getAllRoles)

module.exports = { RolesRoutes }