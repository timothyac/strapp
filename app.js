const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Send index.html on req
app.get("/", (req, res) => {
  res.send(`${__dirname}/public/index.html`);
});

// Start server on port
app.listen(port, () => {
  console.info(`Server running on port: ${port}`);
});
