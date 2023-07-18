import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "../estilos/Conf.css";
const initialState = {
  fecha_conf: " ",
  nombre: " ",
  padre: " ",
  madre: " ",
  padrino: " ",
  lug_nac: " ",
  fecha_nac: " ",
  lugar_bau: " ",
  fecha_bau: " ",
  min_conf: " ",
  no_lib_par: " ",
  no_acta: " ",
  fecha_realiz: " ",
};

function RegistroEliminar() {
  const [confirmacion, setConfirmacion] = useState(initialState);
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
  } = confirmacion;

  const { m } = useParams();
  const navigate = useNavigate();
  const componentRef = useRef(null);

  useEffect(() => {
    if (m) {
      getConfirmacion(m);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getConfirmacion = async (m) => {
    const response = await axios.get(
      `http://127.0.0.1:5000/confirmacion/traer/${m}`
    );

    if (response.status === 200) {
      setConfirmacion(response.data.result[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteConfirmacion(confirmacion);
  };

  const deleteConfirmacion = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/confirmacion/eliminar",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <>
      <div>
        <Button
          className="btn btn-warning"
          onClick={() => navigate(`/home/confirmacion`)}
        >
          Cancelar
        </Button>
        <div ref={componentRef}>
          <div ref={componentRef} className="info">
            <Container>
              <Row>
                <Col>
                  <br></br>
                  <h1>CERTIFICADO DE CONFIRMACIÓN </h1>
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
                    <p className="campo" >
                      Fecha de confirmacion:<span className="datos">{fecha_conf}</span>
                      </p>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Nombre del confirmado:<span className="datos">{nombre}</span>
                      </p>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Padre:<span className="datos">{padre}</span> 
                      </p>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Madre:<span className="datos">{madre}</span> 
                      </p>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Padrino:<span className="datos">{padrino}</span>
                    </p>
                  </Col>
                </Row>
                <br></br>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Lugar de nacimiento:<span className="datos">{lug_nac}</span>
                    </p>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      {" "}
                      Fecha de nacimiento:<span className="datos">{fecha_nac}</span>
                    </p>
                  </Col>
                </Row>
                <br></br>
                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      {" "}
                      Lugar de bautizo:<span className="datos">{lugar_bau}</span>
                    </p>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      {" "}
                      Fecha de nacimiento:<span className="datos">{fecha_bau}</span>
                    </p>
                  </Col>
                </Row>
                <br></br>
                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Ministro de confirmación:<span className="datos"><br></br> <br></br> {min_conf}</span> 
                      
                    </p>
                  </Col>
                </Row>
                <br></br>
                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Núm. del libro parroquial:<span className="datos">{no_lib_par}</span>
                    </p>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Número de acta:<span className="datos">{no_acta}</span>
                    </p>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col>
                    <p className="campo">
                      Fecha de realización:<span className="datos">{fecha_realiz}</span>
                    </p>
                  </Col>
                </Row>

                <br></br>
                <br></br>
              </Form>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistroEliminar;
