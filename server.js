const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/default/testOrder", (req, res) => {
  res.send(res);
  //console.log(res);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
