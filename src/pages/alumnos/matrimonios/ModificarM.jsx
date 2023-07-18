import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  id_ma: "",
  fecha: "",
  hombre: "",
  mujer: "",
  testigo1: "",
  testigo2: "",
  padre: "",
};

function MatrimonioModificar() {
  const [matrimonio, setMatrimonio] = useState(initialState);
  const { id_ma, fecha, hombre, mujer, testigo1, testigo2, padre } = matrimonio;

  const { m } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (m) {
      //IF (props) {
        //alerta 
//      }
      getMatrimonio(m);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMatrimonio = async (m) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/matrimonio/traer/${m}`
      );

      if (response.status === 200) {
        setMatrimonio(response.data.result[0]);
        console.log(response.data.result[0]); // Imprimir los datos de respuesta
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setMatrimonio({ ...matrimonio, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    modifyMatrimonio(matrimonio);
  };

  const modifyMatrimonio = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/matrimonio/modificar",
      data
    );
    if (response.status === 200) {
      toast.info("Registro Modificado!", {
        position: "top-right",
        autoClose: 300,
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
        <Row>
          <Col>
            <h1>Modificar registro</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <p className="fs-3">Datos</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="id_ma">
                <Form.Control
                  name="id_ma"
                  type="text"
                  placeholder="Ingresa número de registro"
                  value={id_ma}
                  onChange={handleInputChange}
                  required
                  disabled
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="fecha">
                <Form.Control
                  name="fecha"
                  type="date"
                  placeholder="Ingresa fecha"
                  value={fecha}
                  onChange={handleInputChange}
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
                <Form.Control
                  name="mujer"
                  type="text"
                  placeholder="Nombre de la señorita"
                  value={mujer}
                  onChange={handleInputChange}
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
                onClick={() => navigate(`/home/matrimonio`)}
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

export default MatrimonioModificar;