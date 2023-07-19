import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
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
      toast.warn("Registro Eliminado!", {
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
     <div className="impresion">
      <Container>
      <ToastContainer />
        <Row>
          <Col>
            <h1>Eliminar registro </h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <p className="campo">Datos</p>
            </Col>
          </Row>

          <Row className="campo">
            <Col>
              <p className="campo">
                Fecha <br></br> {fecha}
              </p>
            </Col>
            </Row>
            <Row className="campo">
            <Col>
              <p className="campo">
                Señor: <br></br> {hombre}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Señorita: <br></br> {mujer}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Primer testigo: <br></br> {testigo1}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Segundo testigo: <br></br>
                {testigo2}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Nombre del padre: <br></br>
                {padre}
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
            <Button type="submit" className="btn btn-danger">
                Eliminar
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
      </div>
    </>
  );
}

export default RegistroEliminar;
