const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const mySqlPool = require("./src/config/db");
const { ProductRouter } = require("./src/routes/productRoutes");


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ProductRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT;

mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log("Connected to DB");

    app.listen(PORT, async () => {
      console.log(`Server Connected PORT :  ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error.message);
  });
