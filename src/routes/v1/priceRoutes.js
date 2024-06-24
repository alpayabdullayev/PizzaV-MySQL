const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const checkRole = require('../../middleware/checkRole')
const { createPrice, getAllPrice } = require('../../controllers/priceController')



const PriceRoutes  = express.Router()

PriceRoutes.post('/create-price',verifyToken,checkRole(1),createPrice)
PriceRoutes.get('/price',getAllPrice)

module.exports = { PriceRoutes }