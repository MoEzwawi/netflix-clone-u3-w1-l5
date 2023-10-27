import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search, PersonCircle, Bell } from 'react-bootstrap-icons';

const MyNav = () => {
    const boldText = {
        fontWeight: 'bold'
    };
    return (
        <>
            <Navbar expand="lg" className="bg-black">
                <Container className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <Navbar.Brand href="#home">
                            <img src={require('../assets/logo.png')} alt='Netflix logo' width="100px" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className='text-white'><span style={boldText}>Home</span></Nav.Link>
                                <Nav.Link href="#" className='text-white'><span style={boldText}>TV Shows</span></Nav.Link>
                                <Nav.Link href="#" className='text-white'><span style={boldText} >Movies</span></Nav.Link>
                                <Nav.Link href="#" className='text-white'><span style={boldText}>Recently Added</span> </Nav.Link>
                                <Nav.Link href="#" className='text-white'><span style={boldText}>My List</span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div>
                        <Search color='white' className='mx-3' />
                        <span className='text-white mx-3' style={boldText}>KIDS</span>
                        <Bell color='white' className='mx-3' />
                        <PersonCircle color='white' className='mx-3' />
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNav