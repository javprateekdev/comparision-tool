const express = require("express");
const con = require("./config");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get("/compare/data", (req, resp) => {
  con.query("select * from project", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});



app.listen("5000")