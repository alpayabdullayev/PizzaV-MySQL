const express = require('express')
const verifyToken = require('../middleware/verifyToken')
const checkRole = require('../middleware/checkRole')
const { createSize, getAllSize } = require('../controllers/sizeController')

const SizeRoutes  = express.Router()

SizeRoutes.post('/create-size',createSize)
SizeRoutes.get('/size',getAllSize)


module.exports = { SizeRoutes }