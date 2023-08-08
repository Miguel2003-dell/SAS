import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

function BautizoAgregar() {
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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setBautizo({ ...bautizo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlumno(bautizo);
  };

  const handleLimpiar = () => {
    setBautizo(initialState);
  };

  const addAlumno = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/bautizo/agregarb",
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
          navigate("/home/bautizo"); // Redireccionar dentro de la función de callback
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
              <p className="fs-3">Nuevo registro de bautizo</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Nombre">
                <Form.Control
                  placeholder="Nombre"
                  name="nombre"
                  type="text"
                  value={nombre}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Lugar de nacimiento ">
                <Form.Control
                  name="lug_nac"
                  type="text"
                  placeholder="Lugar de nacimiento"
                  value={lug_nac}
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
              <FloatingLabel label="Fecha de butizo">
                <Form.Control
                  name="fecha_bau"
                  placeholder="Fecha de bautizo"
                  type="date"
                  value={fecha_bau}
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
              <FloatingLabel label="Abuelo paterno">
                <Form.Control
                  placeholder="Abuelo paterno"
                  name="abuelo_pa"
                  type="text"
                  value={abuelo_pa}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Abuela paterna">
                <Form.Control
                  placeholder="Abuela paterna"
                  name="abuela_pa"
                  type="text"
                  value={abuela_pa}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Abuelo materno">
                <Form.Control
                  placeholder="Abuelo materno"
                  name="abuelo_ma"
                  type="text"
                  value={abuelo_ma}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Abuela materna">
                <Form.Control
                  placeholder="Abuela materna"
                  name="abuela_ma"
                  type="text"
                  value={abuela_ma}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Padrino de oleos">
                <Form.Control
                  placeholder="Padrino de oleos"
                  name="padrino_oleos"
                  type="text"
                  value={padrino_oleos}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Padrino de pila">
                <Form.Control
                  placeholder="Padrino de pila"
                  name="padrino_pila"
                  type="text"
                  value={padrino_pila}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Libro">
                <Form.Control
                  placeholder="Libro"
                  name="libro"
                  type="text"
                  value={libro}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Foja">
                <Form.Control
                  placeholder="Foja"
                  name="foja"
                  type="text"
                  value={foja}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label=" Acta">
                <Form.Control
                  placeholder="Acta "
                  name="acta"
                  type="text"
                  value={acta}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="RC">
                <Form.Control
                  placeholder="RC"
                  name="RC"
                  type="text"
                  value={RC}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Lugar">
                <Form.Control
                  placeholder="Lugar"
                  name="lugar"
                  type="text"
                  value={lugar}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
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

export default BautizoAgregar;
