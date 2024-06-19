const express = require("express");
const app = express();
require("dotenv").config();

// creating port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
