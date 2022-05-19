import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {user &&
                                <Nav.Link as={Link} to="/managetask">ManageTask</Nav.Link>}
                        </Nav>
                        <Nav className="ms-auto">
                            {
                                user ?
                                    <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;