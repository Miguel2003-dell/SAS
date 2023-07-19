import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../estilos/Conf.css";


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
    id_co,
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
    const response = await axios.get(
      `http://127.0.0.1:5000/confirmacion/traer/${m}`
    );

    if (response.status === 200) {
      // console.log(response.data.result[0])
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
          navigate("/home/confirmacion"); // Redireccionar dentro de la función de callback
        },
      });
      console.log(response.data);
    }
  };

  return (
    <>
      <div className="info">
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
              <p  className="campo">Datos</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                Numero de registo: <br></br> {id_co}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Fecha de confirmacion: <br></br> {fecha_conf}
              </p>
            </Col>

            <Col>
              <p  className="campo">
                Nombre: <br></br> {nombre}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                Nombre de la madre: <br></br> {madre}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo"> 
                Nombre del padre: <br></br> {padre}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                Nombre del padrino: <br></br>
                {padrino}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                Lugar de nacimiento: <br></br>
                {lug_nac}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                {" "}
                Fecha de nacimiento: <br></br>
                {fecha_nac}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                {" "}
                Lugar de bautizo: <br></br>
                {lugar_bau}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                {" "}
                Fecha de nacimiento: <br></br>
                {fecha_bau}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                Ministro de confirmación: <br></br>
                {min_conf}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                Núm. del libro parroquial: <br></br>
                {no_lib_par}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">  
                Número de acta: <br></br>
                {no_acta}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p  className="campo">
                Fecha de realización: <br></br>
                {fecha_realiz}
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
                onClick={() => navigate(`/home/confirmacion`)}
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
