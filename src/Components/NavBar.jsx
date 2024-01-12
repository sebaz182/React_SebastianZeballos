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
                    <Link to="/"> <Logo/> </Link>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/category/computadoras">Computadoras</Nav.Link>
                        <Nav.Link as={Link} to="/category/notebooks">Notebooks</Nav.Link>
                        <Nav.Link as={Link} to="/category/celulares">Celulares</Nav.Link>
                        <nav>
                            <Nav.Link as={Link} to="/cart">< CartWidget/></Nav.Link>
                        </nav>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
