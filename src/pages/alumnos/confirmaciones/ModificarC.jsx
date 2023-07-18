import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialState = {
  id_co: "",
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

function ConfirmacionModificar() {
  const [confirmacion, setConfirmacion] = useState(initialState);
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
  } = confirmacion;

  const { m } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (m) {
      getConfirmacion(m);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getConfirmacion = async (m) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/confirmacion/traer/${m}`
      );

      if (response.status === 200) {
        setConfirmacion(response.data.result[0]);
        console.log(response.data.result[0]); // Imprimir los datos de respuesta
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setConfirmacion({ ...confirmacion, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    modifyConfirmacion(confirmacion);
  };

  const modifyConfirmacion = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/confirmacion/modificar",
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
          navigate("/home/confirmacion"); // Redireccionar dentro de la función de callback
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
              <p className="fs-3">Modificar registro</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="id_co">
                <Form.Control
                  name="id_co"
                  type="text"
                  placeholder="Ingresa número de registro"
                  value={id_co}
                  onChange={handleInputChange}
                  required
                  disabled
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Fecha">
                <Form.Control
                  placeholder="Fecha"
                  name="fecha_conf"
                  type="date"
                  value={fecha_conf}
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
              <FloatingLabel label="Nombre de la madre">
                <Form.Control
                  name="madre"
                  type="text"
                  placeholder="Nombre de la madre"
                  value={madre}
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
                  name="padre"
                  placeholder="Nombre de el padre"
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
              <FloatingLabel label="Nombre de el padrino">
                <Form.Control
                  placeholder="Nombre de el padrino"
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
              <FloatingLabel label="Lugar de nacimiento">
                <Form.Control
                  placeholder="Lugar de nacimiento"
                  name="lug_nac"
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
              <FloatingLabel label="Fecha de nacimiento">
                <Form.Control
                  placeholder="Fecha de nacimiento"
                  name="fecha_nac"
                  type="text"
                  value={fecha_nac}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Lugar de bautizo">
                <Form.Control
                  placeholder="Lugar de bautizo"
                  name="lugar_bau"
                  type="text"
                  value={lugar_bau}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Fecha de bautizo">
                <Form.Control
                  placeholder="Fecha de bautizo"
                  name="fecha_bau"
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
              <FloatingLabel label="Ministro de confirmación">
                <Form.Control
                  placeholder="Ministro de confirmación"
                  name="min_conf"
                  type="text"
                  value={min_conf}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Núm. del libro parroquial">
                <Form.Control
                  placeholder="Núm. del libro parroquial"
                  name="no_lib_par"
                  type="text"
                  value={no_lib_par}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Núm. de acta">
                <Form.Control
                  placeholder="Núm. de acta"
                  name="no_acta"
                  type="text"
                  value={no_acta}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Fecha de realización">
                <Form.Control
                  placeholder="Fecha de realización"
                  name="fecha_realiz"
                  value={fecha_realiz}
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
                onClick={() => navigate(`/home/confirmacion`)}
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
export default ConfirmacionModificar;
