const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(cors());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sacramentos'
})

app.post('/login', (req, res) => {
  const sql = "select * from usuarios where usuario = ? and password = ?";

  db.query(sql, [req.body.usuario, req.body.password], (err, data) => {
    if(err) return res.json("Error");
    if(data.length > 0) {
      return res.json("Login exitoso")
    } else {
    return res.json("No jaló :(")
    }
  })
})

app.listen(3001, () =>{
  console.log("Te escucho webonaso");
})