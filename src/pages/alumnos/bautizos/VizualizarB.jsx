import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/Bau.css";

const initialState = {
  nombre: "",
  lug_nac: "",
  fecha_nac: "",
  fecha_bau: "",
  padre: "",
  madre: "",
  abuelo_pa: "",
  abuela_pa: "",
  abuelo_ma: "",
  abuela_ma: "",
  padrino_oleos: "",
  padrino_pila: "",
  libro: "",
  foja: "",
  acta: "",
  RC: "",
  lugar: "",
  fecha: "",
};

function RegistroVizualizar() {
  const [bautizo, setBautizo] = useState(initialState);
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
  } = bautizo;

  const { m } = useParams();
  const navigate = useNavigate();
  const componentRef = useRef(null);

  useEffect(() => {
    if (m) {
      getBautizo(m);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBautizo = async (m) => {
    const response = await axios.get(
      `http://127.0.0.1:5000/bautizo/traer/${m}`
    );

    if (response.status === 200) {
      // console.log(response.data.result[0])
      setBautizo(response.data.result[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteBautizo(bautizo);
  };

  const deleteBautizo = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/bautizo/eliminar",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <>
        <Button
          className="btn btn-warning"
          onClick={() => navigate(`/home/bautizo`)}>
          Cancelar
        </Button>
      <div className="formula">
        <div ref={componentRef}>
          <Container>
          <br></br>
            <Row>
              <Col>
                <h1>CERTIFICADO DE BAUTIZO </h1>
                <br></br>
                <h2> PARROQUIA DE CRISTO REY </h2>
                <br></br>
                <p className="direccion">
                  Rio Balsas #400 Col. Valle del Sur C.P34120, Durango, Dgo.
                </p>
              </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    Nombre:<span className="dato">{nombre}</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="campo">
                    Lugar de nacimiento:<span className="dato">{lug_nac}</span>
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    Fecha de nacimiento:
                    <span className="dato">{fecha_nac}</span>
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    Fecha de bautizo:<span className="dato">{fecha_bau}</span>
                  </p>
                </Col>
              </Row>
              <br></br>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    Nombre del padre:<span className="dato">{padre}</span>
                  </p>
                </Col>
              </Row>
              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    Nombre de la madre:<span className="dato">{madre}</span>
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                    Abuelo paterno:<span className="dato">{abuelo_pa}</span>
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                    Abuela paterna:<span className="dato">{abuela_pa}</span>
                  </p>
                </Col>
              </Row>
              <br></br>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                    Abuelo materno:<span className="dato">{abuelo_ma}</span>
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                    Abuela materna:<span className="dato">{abuela_ma}</span>
                  </p>
                </Col>
              </Row>
              <br></br>
              <br></br>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                    Padrino de oleos:
                    <span className="dato">{padrino_oleos}</span>
                  </p>
                </Col>
              </Row>
              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                    Padrino de pila:
                    <span className="dato">{padrino_pila}</span>
                  </p>
                </Col>
              </Row>

              <div className="firmita">
                <p className="firmaa">________________________________________</p>
                <br></br>
                <p className="firmaa">PBRO.LIC.MANUEL BERNARDO AGUIRRE MARQUEZ</p>
              </div>
              <br></br>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Libro</th>
                    <th scope="col">Foja</th>
                    <th scope="col">Acta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="libro-foja-acta2">{libro}</td>
                    <td className="libro-foja-acta2">{foja}</td>
                    <td className="libro-foja-acta2">{acta}</td>
                  </tr>
                </tbody>
              </table>

              <Row className="mt-3 mb-3">
                <Col className="libro-foja-acta">
                  <p className="campo">
                    RC:<span className="dato">{RC}</span>
                  </p>
                </Col>

                <Col className="libro-foja-acta">
                  <p className="campo">
                    Lugar:<span className="dato">{lugar}</span>
                  </p>
                </Col>

                <Col className="libro-foja-acta">
                  <p className="campo">
                    Fecha:<span className="dato">{fecha}</span>
                  </p>
                </Col>
              </Row>
              <p  className="nota">
                Notas marginales:_____________________________________________
              </p>
              <Row>
                <Col></Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default RegistroVizualizar;
