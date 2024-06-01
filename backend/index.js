const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/Routes");
const dbConnect = require("./config/dbConnect");
dbConnect();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey there");
});
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Port started at ${PORT}`);
});
