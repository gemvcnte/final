const deanController = require("./controller/deanController");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(morgan("tiny"));
// app.use(helmet*())
app.use(express.json());
app.use("/api", deanController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
