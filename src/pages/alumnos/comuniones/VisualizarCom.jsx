import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../estilos/Comun.css"

const initialState = {
  fecha: "",
  nombre: "",
  fecha_nac: "",
  lug_nac: "",
  padre: "",
  madre: "",
  padrino: "",
  parroco: "",
  libro_no: "",
};

function RegistroEliminar() {
  const [comunion, setComunion] = useState(initialState);
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
  } = comunion;

  const { m } = useParams();

  const navigate = useNavigate();
  const componentRef = useRef(null);

  useEffect(() => {
    if (m) {
      getComunion(m);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getComunion = async (m) => {
    const response = await axios.get(
      `http://127.0.0.1:5000/comunion/traer/${m}`
    );

    if (response.status === 200) {
      // console.log(response.data.result[0])
      setComunion(response.data.result[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteComunion(comunion);
  };

  const deleteComunion = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/comunion/eliminar",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <>
      <div>
       
        <div text-align="center">
        <Button
          className="btn btn-warning"
          onClick={() => navigate(`/home/comunion`)}
        >
          Cancelar
        </Button>
        </div>
        <div ref={componentRef} className="info">
          <Container>
            <Row>
              <Col>
              <br></br>
                <h1>CERTIFICADO DE PRIMERA COMUNION </h1>
                <br></br>  <br></br>
                <h2> PARROQUIA DE CRISTO REY </h2>
                <br></br>  <br></br>
                <p className="direccion">
                  Rio Balsas #400 Col. Valle del Sur C.P34120, Durango, Dgo.
                  <br></br>  <br></br>
                </p>
              </Col>
            </Row>

            <Form onSubmit={handleSubmit}>


              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    En la parroquia de Cristo Rey, el  <span className="datos">{fecha}</span>
                  </p>
                </Col>
              </Row>
              <br></br>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    El niño (a):  <span className="datos">{nombre}</span>
                  </p>
                </Col>
              </Row><br></br>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    Nació el día: <span className="datos">{fecha_nac} {lug_nac}</span>
                  </p>
                </Col>
              </Row>



              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    Es hijo del Sr. <span className="datos">{padre}</span>
                    
                  </p>
                </Col>
              </Row>
              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    y de la Sra. <span className="datos">{madre}</span>
                    
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                   Se comprometio como padrino o madrina: <span className="datos">{padrino}</span><br></br>
                    
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                   Párroco: <span className="datos">{parroco}</span>
                    
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    {" "}
                    Quedo escrito en el Libro de Primeras Comuniones N°: <span className="datos">{libro_no}</span>
                    
                  </p>
                </Col>
              </Row>
              <br></br>
              <br></br>
              <div  className="firmita">
              <div text-align="center">
              <p className="firmaa">________________________________________</p><br></br>
              <p className="firmaa">PBRO.LIC.MANUEL BERNARDO AGUIRRE MARQUEZ</p>
          </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br><br></br><br></br><br></br><br></br><br></br>
              </div>

            </Form>
          </Container>
        </div>
      </div>

    </>
  );
}

export default RegistroEliminar;
