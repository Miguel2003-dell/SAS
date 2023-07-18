import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const initialState = {
  fecha: "",
  hombre: "",
  mujer: "",
  testigo1: "",
  testigo2: "",
  padre: "",
};

function MatrimoniosAgregar() {
  const [matrimonio, setMatrimonio] = useState(initialState);
  const { 
    fecha, 
    hombre, 
    mujer, 
    testigo1, 
    testigo2, 
    padre 
  } = matrimonio;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setMatrimonio({ ...matrimonio, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlumno(matrimonio);
  };

  const handleLimpiar = () => {
    setMatrimonio(initialState);
  };

  const addAlumno = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/matrimonio/agregarm",
      data
    );
    if (response.status === 200) {
      toast.info("Nuevo registro!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => {
          navigate("/home/matrimonio"); // Redireccionar dentro de la función de callback
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
              <p className="fs-3">Nuevo registro de matrimonio</p>
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
              <FloatingLabel label="Nombre del señor">
                <Form.Control
                  name="hombre"
                  type="text"
                  placeholder="Nombre del señor"
                  value={hombre}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre de la señorita">
                {" "}
                <Form.Control
                  name="mujer"
                  type="text"
                  placeholder="Nombre de la señorita"
                  value={mujer}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre del primer testigo">
                <Form.Control
                  name="testigo1"
                  placeholder="Nombre del primer testigo"
                  type="text"
                  value={testigo1}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre del segundo testigo">
                <Form.Control
                  placeholder="Nombre del segundo testigo"
                  name="testigo2"
                  type="text"
                  value={testigo2}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre del padre">
                <Form.Control
                  placeholder="Nombre del padre"
                  name="padre"
                  type="text"
                  value={padre}
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
              <Button className="btn btn-warning" onClick={handleLimpiar}>
                Limpiar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default MatrimoniosAgregar;
