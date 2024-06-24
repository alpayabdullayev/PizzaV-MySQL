const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const mySqlPool = require("./src/config/db");

const errorHandler = require("./src/middleware/errorHandler");
const router = require("./src/routes");


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use(router)

app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));

app.use(errorHandler);

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
