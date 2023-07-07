const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`http://121.138.106.4:3000`);
});

const { factorial } = require("./example");

function main() {
  return factorial(1, 4);
}

app.use("/", (req, res) => {
  res.json(main());
});
