const express = require("express");
const { AuthRoutes } = require("./authRoutes");
const { UserRouter } = require("./userController");
const { PriceRoutes } = require("./priceRoutes");
const { CategoryRoutes } = require("./categoryRoutes");
const { RolesRoutes } = require("./rolesController");
const { SizeRoutes } = require("./sizeRoutes");
const { ProductRouter } = require("./productRoutes");



const v1Router = express.Router();

v1Router.use("/api", AuthRoutes);
v1Router.use("/api", UserRouter);
v1Router.use("/api", ProductRouter);
v1Router.use("/api", PriceRoutes);
v1Router.use("/api", CategoryRoutes);
v1Router.use("/api", RolesRoutes);
v1Router.use("/api", SizeRoutes);



module.exports = v1Router;