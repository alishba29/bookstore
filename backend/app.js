const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const User = require("./routes/user");
const Books = require("./routes/book");

//routes
app.use(express.json());
app.use("/api/v1", User);
app.use("/api/v1", Books);
// creating port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
