const express = require("express");
const api = require("./routes/api-routes");
const htmlRoute = require("./routes/html-routes");

const app = express();

const port = 3001;

// The body-parser middleware
// to parse form data
app.use(express.json());
app.use("/api", api);
app.use("/", htmlRoute);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Server setup
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
