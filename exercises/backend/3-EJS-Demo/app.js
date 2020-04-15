const bodyParser = require("body-parser");
const express = require("express");
const app = express();

let posts = [
  { title: "Post 1", author: "Susy" },
  { title: "Post 2", author: "Charlie" },
  { title: "Post 3", author: "Colt" },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/fallinlovewith/:thing", (req, res) => {
  let thing = req.params.thing;
  res.render("love", { thingVar: thing });
});

app.get("/posts", (req, res) => {
  res.render("posts", { posts: posts });
});

app.post("/posts/add", (req, res) => {
  posts.push(req.body);
  res.redirect("/posts");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
