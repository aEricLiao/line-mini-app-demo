const express = require("express");
const path = require("path");
const appProd = express();

const app =
  process.env.ENVIRONMENT !== "local_production"
    ? appProd
    : require("https-localhost")();

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 9090;

app.use(express.static(path.join(__dirname, "../ui/build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../ui/build", "index.html"));
});
app.listen(PORT, () => {
  console.log("ENVIRONMENT", process.env.ENVIRONMENT);
  console.log(`app listen in ${PORT}`);
});
