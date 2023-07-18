const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sacramentos",
});

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND password = ?";
  const { usuario, password } = req.body;

  db.query(sql, [usuario, password], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Error en la consulta" });
    }

    if (result.length > 0) {
      return res.json({ success: true, message: "Login exitoso" });
    } else {
      return res.json({ success: false, message: "Credenciales inválidas" });
    }
  });
});




app.listen(3001, () => {
  console.log("Te escucho webonaso");
});

app.post("/matrimonio/agregarm", (req, res) => {
  console.log("aqui");
  const { id_ma, fecha, hombre, mujer, testigo1, testigo2, padre } = req.body;

  const sql = "INSERT INTO matrimonio VALUES (?,?,?,?,?,?,?)";
  db.query(
    sql,
    [id_ma, fecha, hombre, mujer, testigo1, testigo2, padre],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.post("/matrimonio/modificar", (req, res) => {
  const { fecha, hombre, mujer, testigo1, testigo2, padre, id_ma } = req.body;

  const sql =
    "update matrimonio set fecha=?, hombre=?, mujer=?, testigo1=?, testigo2=?, padre=? where id_ma=?";

  db.query(
    sql,
    [fecha, hombre, mujer, testigo1, testigo2, padre, id_ma],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});

app.post("/matrimonio/eliminar", (req, res) => {
  const { id_ma } = req.body;

  const sql = "delete from matrimonio where id_ma=?";

  db.query(sql, [id_ma], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/confirmacion/agregarc", (req, res) => {
  console.log("aqui");
  const {
    id_co,
    fecha_conf,
    nombre,
    padre,
    madre,
    padrino,
    lug_nac,
    fecha_nac,
    lugar_bau,
    fecha_bau,
    min_conf,
    no_lib_par,
    no_acta,
    fecha_realiz,
  } = req.body;

  const sql = "INSERT INTO confirmacion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      id_co,
      fecha_conf,
      nombre,
      padre,
      madre,
      padrino,
      lug_nac,
      fecha_nac,
      lugar_bau,
      fecha_bau,
      min_conf,
      no_lib_par,
      no_acta,
      fecha_realiz,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.post("/confirmacion/modificar", (req, res) => {
  const {
    fecha_conf,
    nombre,
    padre,
    madre,
    padrino,
    lug_nac,
    fecha_nac,
    lugar_bau,
    fecha_bau,
    min_conf,
    no_lib_par,
    no_acta,
    fecha_realiz,
    id_co,
  } = req.body;

  const sql =
    "update confirmacion set fecha_conf=?, nombre=?, padre=?, madre=?, padrino=?, lug_nac=?, fecha_nac=?, lugar_bau=?, fecha_bau=?, min_conf=?, no_lib_par=?, no_acta=?, fecha_realiz=? where id_co=?";

  db.query(
    sql,
    [
      fecha_conf,
      nombre,
      padre,
      madre,
      padrino,
      lug_nac,
      fecha_nac,
      lugar_bau,
      fecha_bau,
      min_conf,
      no_lib_par,
      no_acta,
      fecha_realiz,
      id_co,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});

app.post("/confirmacion/eliminar", (req, res) => {
  const { id_co } = req.body;
  const sql = "delete from confirmacion where id_co=?";

  db.query(sql, [id_co], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/comunion/agregarcom", (req, res) => {
  console.log("aqui");
  const {
    id_comu,
    fecha,
    nombre,
    fecha_nac,
    lug_nac,
    padre,
    madre,
    padrino,
    parroco,
    libro_no,
  } = req.body;

  const sql = "INSERT INTO comunion VALUES (?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      id_comu,
      fecha,
      nombre,
      fecha_nac,
      lug_nac,
      padre,
      madre,
      padrino,
      parroco,
      libro_no,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.post("/comunion/modificar", (req, res) => {
  const {
    fecha,
    nombre,
    fecha_nac,
    lug_nac,
    padre,
    madre,
    padrino,
    parroco,
    libro_no,
    id_comu,
  } = req.body;

  const sql =
    "update comunion set fecha=?, nombre=?, fecha_nac=?, lug_nac=?, padre=?, madre=?, padrino=?, parroco=?, libro_no=? WHERE id_comu=?";

  db.query(
    sql,
    [
      fecha,
      nombre,
      fecha_nac,
      lug_nac,
      padre,
      madre,
      padrino,
      parroco,
      libro_no,
      id_comu,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});

app.post("/comunion/eliminar", (req, res) => {
  const { id_comu } = req.body;
  const sql = "delete from comunion where id_comu=?";

  db.query(sql, [id_comu], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/bautizo/agregarb", (req, res) => {
  console.log("aqui");
  const {
    id_ba,
    nombre,
    lug_nac,
    fecha_nac,
    fecha_bau,
    padre,
    madre,
    abuelo_pa,
    abuela_pa,
    abuelo_ma,
    abuela_ma,
    padrino_oleos,
    padrino_pila,
    libro,
    foja,
    acta,
    RC,
    lugar,
    fecha,
  } = req.body;

  const sql =
    "INSERT INTO bautizo VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      id_ba,
      nombre,
      lug_nac,
      fecha_nac,
      fecha_bau,
      padre,
      madre,
      abuelo_pa,
      abuela_pa,
      abuelo_ma,
      abuela_ma,
      padrino_oleos,
      padrino_pila,
      libro,
      foja,
      acta,
      RC,
      lugar,
      fecha,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.post("/bautizo/modificar", (req, res) => {
  const {
    nombre,
    lug_nac,
    fecha_nac,
    fecha_bau,
    padre,
    madre,
    abuelo_pa,
    abuela_pa,
    abuelo_ma,
    abuela_ma,
    padrino_oleos,
    padrino_pila,
    libro,
    foja,
    acta,
    RC,
    lugar,
    fecha,
    id_ba,
  } = req.body;

  const sql =
    "update bautizo set nombre=?, lug_nac=?, fecha_nac=?, fecha_bau=?, padre=?, madre=?, abuelo_pa=?, abuela_pa=?, abuelo_ma=?, abuela_ma=?, padrino_oleos=?, padrino_pila=?, libro=?, foja=?, acta=?, RC=?, lugar=?, fecha=? where id_ba=?";

  db.query(
    sql,
    [
      nombre,
      lug_nac,
      fecha_nac,
      fecha_bau,
      padre,
      madre,
      abuelo_pa,
      abuela_pa,
      abuelo_ma,
      abuela_ma,
      padrino_oleos,
      padrino_pila,
      libro,
      foja,
      acta,
      RC,
      lugar,
      fecha,
      id_ba,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});

app.post("/bautizo/eliminar", (req, res) => {
  const { id_ba } = req.body;
  const sql = "delete from bautizo where id_ba=?";

  db.query(sql, [id_ba], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/matrimonios", (req, res) => {
  const sql = "select * from matrimonio";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/matrimonio/traer/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select * from matrimonio where id_ma=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/confirmaciones", (req, res) => {
  const sql = "select * from confirmacion";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/confirmacion/traer/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select * from confirmacion where id_co=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/comuniones", (req, res) => {
  const sql = "select * from comunion";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/comunion/traer/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select * from comunion where id_comu=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/bautizos", (req, res) => {
  const sql = "select * from bautizo";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/bautizo/traer/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select * from bautizo where id_ba=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});
