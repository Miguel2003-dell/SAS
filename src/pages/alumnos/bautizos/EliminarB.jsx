import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../estilos/Bau.css";

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

function RegistroEliminar() {
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

  const { m } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (m) {
      getBautizo(m);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBautizo = async (m) => {
    const response = await axios.get(
      `http://127.0.0.1:5000/bautizo/traer/${m}`
    );

    if (response.status === 200) {
      // console.log(response.data.result[0])
      setBautizo(response.data.result[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteBautizo(bautizo);
  };

  const deleteBautizo = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/bautizo/eliminar",
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
          navigate("/home/bautizo"); // Redireccionar dentro de la función de callback
        },
      });
      console.log(response.data);
    }
  };

  return (
    <>
     <div className="formula">
      <Container>
      <ToastContainer />
        <Row>
          <Col>
            <h1>Eliminar registro </h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
        

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Nombre <br></br> {nombre}
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
                Fecha de nacimiento: <br></br> {fecha_nac}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo"> 
                Fecha de bautizo: <br></br> {fecha_bau}
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
                Abuelo paterno: <br></br>
                {abuelo_pa}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Abuela paterna: <br></br>
                {abuela_pa}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Abuelo materno: <br></br>
                {abuelo_ma}
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Abuela materna: <br></br>
                {abuela_ma}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Padrino de oleos: <br></br>
                {padrino_oleos}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Padrino de pila: <br></br>
                {padrino_pila}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Libro: <br></br>
                {libro}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Foja: <br></br>
                {foja}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Acta: <br></br>
                {acta}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                RC: <br></br>
                {RC}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                Lugar: <br></br>
                {lugar}
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <p className="campo">
                {" "}
                Fecha: <br></br>
                {fecha}
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
                onClick={() => navigate(`/home/bautizo`)}
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
