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
                        <Link to="/category/computadoras">Computadoras</Link>
                        <Link to="/category/notebooks">Notebooks</Link>
                        <Link to="/category/celulares">Celulares</Link>
                        <Link to="/cart"> < CartWidget/> 1 </Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
