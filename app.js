const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

//memanggil file static
app.use(express.static("public"));

app.use(morgan("tiny"));

app.get("/", function (req, res) {
  // res.send("Hello World");
  res.sendFile("./index.html", { root: path.join(__dirname, "public") });
});

app.get("/testhtml", function (req, res) {
  // res.send("Hello World");
  res.sendFile("./test.html", { root: path.join(__dirname, "public") });
});

app.get("/about", function (req, res) {
  res.json({ user: "tobi", kelas: "B", matakuliah: "web programming" });
});

app.post("/", function (req, res) {
  res.send("ini method post");
});

app.delete("/", function (req, res) {
  res.send("ini method delete");
});

app.get("/contact/:nama", function (req, res) {
  res.send(`nama kontak : ${req.params.nama}`);
});

app.get("/kelas/:kelas", function (req, res) {
  res.send(`nama Kelas : ${req.params.kelas}, matakuliah :  ${req.query.mk} `);
});

app.put("/", function (req, res) {
  res.send("ini method put");
});

app.listen(3000, () => {
  console.log("server berjalan...");
});
