const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const { createSize, getAllSize } = require('../../controllers/sizeController')
const checkRole = require('../../middleware/checkRole')


const SizeRoutes  = express.Router()

SizeRoutes.post('/create-size',verifyToken,checkRole(1),createSize)
SizeRoutes.get('/size',getAllSize)


module.exports = { SizeRoutes }