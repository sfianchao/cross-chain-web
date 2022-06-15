const express = require("express");
const app = express();
const port = 5000;

app.use("/hospital", express.static("hospital"));
app.use("/care", express.static("care"));

app.get("/", (req, res) => {
  res.send("cross-chain demo");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
