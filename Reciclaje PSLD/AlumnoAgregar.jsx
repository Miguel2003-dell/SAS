import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from "axios";


const initialState = {
  nombre:'',
  edad:'',
  direccion:'',
  carrera:'', 
  modalidad:'',
  eleccion:'',
  trabajas:'', 
  horas:'',
  ingreso_mensua:'', 
  egreso_mensua:'',	
  casa:'', 
  cuartos:'', 
  personas:'', 
  internet:'', 
  computadora:'',	
  refri:'', 
  agua:'', 
  drenado:'', 
  electricidad:'', 
  beca:'',  
  ambiente:'',
  responsabilidades:'', 
  discapacidad:'',	
  secundaria:'',	
  final_secu:'',	
  prepa:'',	
  especialidad:'',	
  final_prepa:'', 
  habitos:'', 
  estudias:'', 
  enfermedad:'',
  medicamento:'',
  tristeza:'',
  pesimismo:'',
  irritabilidad:'',
  retirada:'',
  indesicion:'',
  imagen_corporal:'', 
  enlentecimiento:'',
  insomnio:'',
  peso:'',
  calor:'',
  temblor_piernas:'', 
  temblor_manos:'', 
  mareo:'',
};

function AlumnoAgregar() {
  const [alumno, setAlumno] = useState(initialState);
  const {
    nombre,
    edad,
    direccion,
    carrera,
    modalidad,
    eleccion,
    trabajas,
    horas,
    ingreso_mensua,
    egreso_mensua,
    casa,
    cuartos,
    personas,
    internet,
    computadora,
    refri,
    agua,
    drenado,
    electricidad,
    beca,
    ambiente,
    responsabilidades,
    discapacidad,
    secundaria,
    final_secu,
    prepa,
    especialidad,
    final_prepa,
    habitos,
    estudias,
    enfermedad,
    medicamento,
    tristeza,
    pesimismo,
    irritabilidad,
    retirada,
    indesicion,
    imagen_corporal,
    enlentecimiento,
    insomnio,
    peso,
    calor,
    temblor_piernas,
    temblor_manos,
    mareo,
  } = alumno;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setAlumno({ ...alumno, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlumno(alumno);
  };

  const addAlumno = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/alumno/agregar",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  };


  return (
    <>
<Container>
      
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <p className="fs-3">Datos generales</p>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
         

          <Col>
          <FloatingLabel label="Ingresa tu nombre completo">
            <Form.Control
            placeholder="Ingresa tu nombre completo"
              name="nombre"
              type="text"
             value = {nombre}
             onChange = {handleInputChange}
              required
            />
          </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
        
          <Col>
          <FloatingLabel label="Edad">
            <Form.Control
              name="edad"
              type="text"
              placeholder="Edad"
              value={edad}
              onChange = {handleInputChange}
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Ingresa tu direccion">
            {" "}
            <Form.Control
              name="direccion"
              type="text"
              placeholder="Ingresa tu direccion"
              value = {direccion}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Ingresa tu carrera">
            <Form.Control
              name="carrera"
              placeholder="Ingresa tu carrera"
              type="text"
              value = {carrera}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>

          <Col>
            <Form.Select
              name="modalidad"
              aria-label="Default select example"
              value={modalidad}
              onChange = {handleInputChange}
              required
            >
              <option>Selecciona tu modalidad</option>

              <option value="Clasica">Clasica</option>

              <option value="Bilingue">Bilingue</option>
            </Form.Select>
          </Col>
        </Row>
        <Col>
            <Form.Select
              name="eleccion"
              aria-label="Default select example"
              value={eleccion}
              
              onChange = {handleInputChange}
              required
            >
              <option>Que tan seguro estas de tu eleccion de carrera</option>

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Col>

        
        <Row className="mt-3 mb-3">
          <Col>
            <p className="fs-3">Estudio socioeconomico </p>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          
          <Col>
          <FloatingLabel label="Actualmente trabajas?">
            <Form.Control
              name="trabajas"
              type="text"
              placeholder="Actualmente trabajas?"
              value = {trabajas}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Cuantas horas trabajas?">
            <Form.Control
              name="horas"
              placeholder="Cuantas horas trabajas?"
              type="text"
              value = {horas}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Ingreso mensual">
            <Form.Control
              name="ingreso_mensua"
              type="text"
              placeholder="Ingreso mensual"
              value = {ingreso_mensua}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Egreso mensual">
            <Form.Control
              name="egreso_mensua"
              type="text"
              placeholder="Egreso mensual"
              value = {egreso_mensua}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          
          <Col>
          <FloatingLabel label="La casa donde vives es:">
            <Form.Control
              name="casa"
              type="text"
              placeholder="La casa donde vives es:"
              value = {casa}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
      
          <Col>
          <FloatingLabel label="Cuantos cuartos hay en tu casa?">
            <Form.Control
              name="cuartos"
              type="text"
              placeholder="Cuantos cuartos hay en tu casa?"
              value = {cuartos}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Cuantas personas viven en tu casa?">
            <Form.Control
              name="personas"
              type="text"
              placeholder="Cuantas personas viven en tu casa?"
              value = {personas}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Cuentas con internet?">
            <Form.Control
              name="internet"
              type="text"
              placeholder="Cuentas con internet?"
              value = {internet}
              onChange = {handleInputChange}
              required
            />
          </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Cuentas con computadora?">
            <Form.Control
              name="computadora"
              type="text"
              placeholder="Cuentas con computadoras?"
              value = {computadora}
              onChange = {handleInputChange}
              required
            />
          </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Cuentas con refrigerador?">
            <Form.Control
              name="refri"
              type="text"
              placeholder="Cuantas con refrigerador?"
              value = {refri}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Cuentas con agua potable?">
            <Form.Control
              name="agua"
              type="text"
              placeholder="Cuantas con agua potable?"
              value = {agua}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Cuentas con drenaje?">
            <Form.Control
              name="drenado"
              type="text"
              placeholder="Cuantas con drenaje?"
              value = {drenado}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Cuentas con electricidad?">
            <Form.Control
              name="electricidad"
              type="text"
              placeholder="Cuantas con electricidad?"
              value = {electricidad}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Actualmente tienes un tipo de beca?">
            <Form.Control
              name="beca"
              type="text"
              placeholder="Actualmente tienes un tipo de beca?"
              value = {beca}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="El ambiente en familia,¿Como se vive?">
            <Form.Control
              name="ambiente"
              type="text"
              placeholder="El ambiente en familia,¿Como se vive?"
              value = {ambiente}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Como distribuyes las tareas de la familia?">
            <Form.Control
              name="responsabilidades"
              type="text"
              placeholder="Como distribuyes las tareas de la familia?"
              value = {responsabilidades}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
            <p className="fs-3">Evaluacion escolar </p>
          </Col>
        </Row>


        <Row className="mt-3 mb-3">
          <Col>
            <FloatingLabel label="Tienes alguna discapacidad?">
              <Form.Control
                name="discapacidad"
                type="text"
                placeholder="Tienes alguna discapacidad?"
                value={discapacidad}
                onChange = {handleInputChange}
                required
              />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Donde estudiaste la secundaria?">
            <Form.Control
              name="secundaria"
              type="text"
              placeholder="Donde estudiaste la secundaria?"
             value = {secundaria}
             onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Cual fue tu promedio de secundaria?">
            <Form.Control
              name="final_secu"
              type="text"
              placeholder="Cual fue tu promedio de secundaria?"
              value = {final_secu}
              onChange = {handleInputChange}
            />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="En cual preparatoria estuviste?">
            <Form.Control
              name="prepa"
              type="text"
              placeholder="En cual preparatoria estuviste?"
              value={prepa}
              onChange = {handleInputChange}
            />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Especialidad">
            <Form.Control
              name="especialidad"
              type="text"
              placeholder="Especialidad"
              value = {especialidad}
              onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>

          <Col>
            <Form.Control
              name="final_prepa"
              type="text"
              placeholder="Promedio final"
              value = {final_prepa}
              onChange = {handleInputChange}
              required
            />
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
            <p className="fs-3">Habitos de estudio </p>
          </Col>
        </Row>


        <Row className="mt-3 mb-3">
          <Col>
            <FloatingLabel label="Cuales son tus habitos de estudio?">
              <Form.Control
                name="habitos"
                type="text"
                placeholder="Cuales son tus habitos de estudio?"
                value={habitos}
                onChange = {handleInputChange}
                required
              />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Con que frecuencia estudias?">
            <Form.Control
              name="estudias"
              type="text"
              placeholder="Con que frecuencia estudias?"
             value = {estudias}
             onChange = {handleInputChange}
              required
            />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
            <p className="fs-3">Salud fisica </p>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
          <FloatingLabel label="Padeces alguna enfermedad?">
            <Form.Control
              name="enfermedad"
              type="text"
              placeholder="Padeces alguna enfermedad?"
              value = {enfermedad}
              onChange = {handleInputChange}
            />
            </FloatingLabel>
          </Col>

          <Col>
          <FloatingLabel label="Tomas algun medicamento?">
            <Form.Control
              name="medicamento"
              type="text"
              placeholder="Tomas algun medicamento?"
              value={medicamento}
              onChange = {handleInputChange}
            />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
            <p className="fs-3">Estado de animo </p>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
        <Col>
            <Form.Select
              name="tristeza"
              aria-label="Default select example"
              value={tristeza}
              onChange = {handleInputChange}
              required
            >
              <option>tristeza</option>

              <option value="1">1-no me siento triste</option>

              <option value="2">2-me siento triste</option>
              <option value="3">3-me siento triste continuamente y no puedo dejar de estarlo</option>

            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="pesimismo"
              aria-label="Default select example"
              value={pesimismo}
              onChange = {handleInputChange}
              required
            >
              <option>pesimismo</option>
              <option value="1">1-no me siento desanimado</option>
              <option value="2">2-el futuro es desesperanzador</option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="irritabilidad"
              aria-label="Default select example"
              value={irritabilidad}
              onChange = {handleInputChange}
              required
            >
              <option>irritabilidad</option>
              <option value="1">1-no estoy especialmente irritado</option>
              <option value="2">2-ahora no me irrito en absoluto</option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="retirada"
              aria-label="Default select example"
              value={retirada}
              onChange = {handleInputChange}
              required
            >
              <option>retirada social</option>
              <option value="1">1-no he perdido el interes por los demas</option>
              <option value="2">2-he perdido todo el interes </option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="indesicion"
              aria-label="Default select example"
              value={indesicion}
              onChange = {handleInputChange}
              required
            >
              <option>indecision</option>
              <option value="1">1-tomo mis propias decision</option>
              <option value="2">2-me hes imposible tomar decisiones </option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="imagen_corporal"
              aria-label="Default select example"
              value={imagen_corporal}
              onChange = {handleInputChange}
              required
            >
              <option>cambios en la imagen corporal</option>
              <option value="1">1-no creo tener peor aspecto que antes</option>
              <option value="2">2-creo que tengo un aspecto horrible</option>
              </Form.Select>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
        <Col>
            <Form.Select
              name="enlentecimiento"
              aria-label="Default select example"
              value={enlentecimiento}
              onChange = {handleInputChange}
              required
            >
              <option>Enlentecimiento</option>
              <option value="1">1-Trabajo igual que antes</option>
              <option value="2">2-Soy incapas de llevar acabo alguna tarea</option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="insomnio"
              aria-label="Default select example"
              value={insomnio}
              onChange = {handleInputChange}
              required
            >
              <option>insomnio </option>
              <option value="1">1-Duermo tan bien como siempre</option>
              <option value="2">2-Me despierto varias horas antes de lo habitual</option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="peso"
              aria-label="Default select example"
              value={peso}
              onChange = {handleInputChange}
              required
            >
              <option>Perdida de peso</option>
              <option value="1">1-no he perdido peso ultimamente</option>
              <option value="2">2-he perdido mas de 7 kilos</option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="calor"
              aria-label="Default select example"
              value={calor}
              onChange = {handleInputChange}
              required
            >
              <option>sensacion de calor </option>
              <option value="1">1-en absoluto</option>
              <option value="2">2-severamente</option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="temblor_piernas"
              aria-label="Default select example"
              value={temblor_piernas}
              onChange = {handleInputChange}
              required
            >
              <option>Temblor de piernas</option>
              <option value="1">1-en absoluto</option>
              <option value="2">2-severamente</option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="temblor_manos"
              aria-label="Default select example"
              value={temblor_manos}
              onChange = {handleInputChange}
              required
            >
              <option>Temblor de manos</option>
              <option value="1">1-en absoluto</option>
              <option value="2">2-severamente</option>
              </Form.Select>
          </Col>
          <Col>
            <Form.Select
              name="mareo"
              aria-label="Default select example"
              value={mareo}
              onChange = {handleInputChange}
              required
            >
              <option>Mareo</option>
              <option value="1">1-en absoluto</option>
              <option value="2">2-severamente</option>
              </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button  type="submit" className="btn btn-primary">Guardar</Button>
          </Col>

          <Col>
            <Button className="btn btn-info">Cancelar</Button>
          </Col>
        </Row>

        {/* <Row className='mt-3 mb-3'>

                                             <Col></Col>

                                             <Col></Col>

                             </Row> */}
      </Form>
    </Container>

    </>
  );
}

export default AlumnoAgregar;
