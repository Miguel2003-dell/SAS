import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import jsusImage from "./imagen/jsus.jpg";
import "./estilos.css";
function Home() {
  return (
    <>
      <Container className="pt-5  justify-content-center align-items-center">
        <Row>
      
          <Col lg={8} md={8} sm={12} className="frasee"> <br></br> <br></br> <br></br> <br></br> <br></br>
          Oh Cristo Jesús, te reconozco por Rey universal. Todo cuanto existe ha sido creado por ti. <br></br> Ejerce sobre mí todos tus derechos. Renuevo mis promesas del bautismo,renunciando a Satanás, <br></br> a sus seducciones y a sus obras, y prometo vivir como buen cristiano. Muy en particular me  <br></br> comprometo a hacer triunfar, según mis medios, los derechos de Dios y de tu Iglesia.

            Jesucristo,  <br></br>te ofrezco mis pobres acciones para obtener que todos los corazones reconozcan y <br></br>vivan tu mensaje de paz,  de justicia y de amor.
<br></br>
            Amén.
           
          </Col>
  
          <Col lg={3} md={3} sm={10} className="d-flex justify-content-end">
          <br></br>
            <Image
              src={jsusImage}
              fluid
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
