import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../estilos/M.css";

const initialState = {
  fecha: "",
  hombre: "",
  mujer: "",
  testigo1: "",
  testigo2: "",
  padre: "",
};

function RegistroEliminar() {
  const [matrimonio, setMatrimonio] = useState(initialState);
  const { fecha, hombre, mujer, testigo1, testigo2, padre } = matrimonio;

  const { m } = useParams();

  const navigate = useNavigate();
  const componentRef = useRef(null);

  useEffect(() => {
    if (m) {
      getMatrimonio(m);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMatrimonio = async (m) => {
    const response = await axios.get(
      `http://127.0.0.1:5000/matrimonio/traer/${m}`
    );

    if (response.status === 200) {
      // console.log(response.data.result[0])
      setMatrimonio(response.data.result[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteMatrimonio(matrimonio);
  };

  const deleteMatrimonio = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/matrimonio/eliminar",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <>
        <Button
                    className="btn btn-warning btn-cancel"
                    onClick={() => navigate(`/home/matrimonio`)}
                  >
                    Cancelar
                  </Button>
      <div className="formulario">
       
        <div ref={componentRef}>

        <div ref={componentRef} className="impresion">
          <Container>
            <Row>
              <Col>
              <br></br>
              <h1>CONSTANCIA DE MATRIMONIO </h1>
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
                    El suscrito párroco hace constar que el día:<span className="datos">{fecha}</span> 
                  </p>
                </Col>
                </Row>

            <p className="oracion" >CONTRAJERON MATRIMONIO CANÓNICO, IN FACIE ECLESIAE</p>
                <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    El señor.<span className="datos">{hombre}</span> 
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                    Y la Srta.<span className="datos">{mujer}</span>  
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
               
                  <p className="campo">
                   Fueron testigos<span className="datos"><br></br> {testigo1} y {testigo2}</span> 
                  </p>
               
              </Row>


              <Row className="mt-3 mb-3">
                <Col>
                  <p className="campo">
                   Asistió al matrimonio.<span className="datos">{padre}</span> 
                  </p>
                </Col>
              </Row>
<br></br>

              <div className="firmita">
              <p className="firmaa">________________________________________</p>
              <p className="firmaa">PBRO.LIC.MANUEL BERNARDO AGUIRRE MARQUEZ</p>
             
              
              </div>
            </Form>
          </Container>
        </div>
      </div>
      </div>
    </>
  );
}

export default RegistroEliminar;
