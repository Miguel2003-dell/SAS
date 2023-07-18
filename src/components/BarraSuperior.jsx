import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from "react-router-dom";

function BarraSuperior() {
	return ( 
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand as={ Link } to='/'> INICIO 🙏</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown title="Bautizo" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='bautizo'>Registros</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='bautizo/agregarb'>Insertar registro nuevo</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Comunión" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='comunion'>Registros</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='comunion/agregarcom'>Insertar registro nuevo</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Confirmación" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='confirmacion'>Registros</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='confirmacion/agregarc'>Insertar registro nuevo</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Matrimonio" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='matrimonio'>Registros</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='matrimonio/agregarm'>Insertar registro nuevo</NavDropdown.Item>

							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div>
				<Outlet></Outlet>
			</div>
		</>
	 );
}

export default BarraSuperior;