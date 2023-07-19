import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast,  ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../estilos/Comun.css"



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
          navigate("/home/comunion"); // Redireccionar dentro de la función de callback
        },
      });
      console.log(response.data);
    }
  };

  return (
    <>
     <div  className="info">
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

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Fecha <br></br> {fecha}
              </p>
            </Col>
            </Row>
            <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Nombre: <br></br> {nombre}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Fecha de nacimiento: <br></br> {fecha_nac}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo"> 
                Lugar de nacimiento: <br></br> {lug_nac}
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
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Nombre de la madre: <br></br>
                {madre}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Nombre del padrino: <br></br>
                {padrino}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Nombre del parroco: <br></br>
                {parroco}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Libro de primeras comuniones: <br></br>
                {libro_no}
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
                onClick={() => navigate(`/home/comunion`)}
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
