import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <header className='sticky-top'>
            <Navbar bg="black" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/"> <Logo/> </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/computadoras">Computadoras</Link>
                        <Link to="/notebooks">Notebooks</Link>
                        <Link to="/celulares">Celulares</Link>
                        <Link to="/cart"> < CartWidget/> </Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
