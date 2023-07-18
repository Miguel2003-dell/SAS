import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, FloatingLabel} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  id_comu: "",
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

function ComunionModificar() {
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

  useEffect(() => {
    if (m) {
      getComunion(m);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getComunion = async (m) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/comunion/traer/${m}`
      );

      if (response.status === 200) {
        setComunion(response.data.result[0]);
        console.log(response.data.result[0]); // Imprimir los datos de respuesta
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setComunion({ ...comunion, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    modifyComunion(comunion);
  };

  const modifyComunion = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/comunion/modificar",
      data
    );
    if (response.status === 200) {
      toast.info("Registro Modificado!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => {
          navigate("/home/comunion"); // Redireccionar dentro de la función de callback
        },
      });
      console.log(response.data);
    }
  };

  return (
    <>
      <Container>
        <ToastContainer />
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <p className="fs-3">Nuevo registro de comunión</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Fecha">
                <Form.Control
                  placeholder="Fecha"
                  name="fecha"
                  type="date"
                  value={fecha}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre ">
                <Form.Control
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Fecha de nacimiento">
                {" "}
                <Form.Control
                  name="fecha_nac"
                  type="date"
                  placeholder="Fecha de nacimiento"
                  value={fecha_nac}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Lugar de nacimiento">
                <Form.Control
                  name="lug_nac"
                  placeholder="Lugar de nacimiento"
                  type="text"
                  value={lug_nac}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre de el padre">
                <Form.Control
                  placeholder="Nombre de el padre"
                  name="padre"
                  type="text"
                  value={padre}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre de la madre">
                <Form.Control
                  placeholder="Nombre de la madre"
                  name="madre"
                  type="text"
                  value={madre}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre del padrino">
                <Form.Control
                  placeholder="Nombre del padrino"
                  name="padrino"
                  type="text"
                  value={padrino}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre del parroco">
                <Form.Control
                  placeholder="Nombre del parroco"
                  name="parroco"
                  type="text"
                  value={parroco}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Libro de primeras comuniones">
                <Form.Control
                  placeholder="Libro de primeras comuniones"
                  name="libro_no"
                  type="text"
                  value={libro_no}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" className="btn btn-success">
                Guardar
              </Button>
            </Col>

            <Col>
            <Button
                className="btn btn-warning"
                onClick={() => navigate(`/home/comunion`)}
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default ComunionModificar;
