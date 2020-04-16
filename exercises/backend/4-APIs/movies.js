const express = require("express");
const request = require("request");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  const url =
    "http://www.omdbapi.com/?apikey=" + process.env.OMDB_API_KEY + "&";
  const query = req.query.search;
  request(url + "s=" + query, (error, response, body) => {
    if (error) {
      return console.log(error);
    }

    let data = JSON.parse(body);
    res.render("results", { data });
  });
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
