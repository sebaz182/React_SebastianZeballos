import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Logo from './Logo';



const NavBar = () => {
    return (
        <header className='sticky-top'>
            <Navbar bg="black" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#computadoras">Computadoras</Nav.Link>
                        <Nav.Link href="#notebooks">Notebooks</Nav.Link>
                        <Nav.Link href="#celulares">Celulares</Nav.Link>
                        <Nav.Link> < CartWidget/> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
