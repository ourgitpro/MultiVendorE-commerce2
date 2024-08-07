const express = require("express");
//const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = require("./utiles/dbConnect");
//const { dbConnect } = require("./utiles/dbConnect");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
dbConnect();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));
app.get("/", (req, res) => res.send("Hello Server"));
//mongoose.connect(process.env.MONGODB_URAL).then(() => {
// console.log("Data base connection ");
//});
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running ${port}`));
