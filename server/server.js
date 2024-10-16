const express = require("express");
const router = require("./routes/Emailroutes");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/email", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
