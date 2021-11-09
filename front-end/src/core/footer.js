import React, {Component} from 'react';
import Styling from '../css/style.css';
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Footer extends Component {
  render(){
    return (
	<footer>
    <Navbar expand="lg" bg="dark" variant="dark">
        <Row style={{flexWrap:'nowrap'}} id="footerbar">
            <Col xs="10">
                <Navbar.Brand href="#home">renTrend</Navbar.Brand>
            </Col>
            <Col xs="8">
                <Nav.Link href="#home">Shop</Nav.Link>
                <Nav.Link href="#home">Women</Nav.Link>
                <Nav.Link href="#home">Kids</Nav.Link>
                <Nav.Link href="#home">Men</Nav.Link>
            </Col>
            <Col xs="8">
                <Nav.Link href="#home">Useful Links</Nav.Link>
                <Nav.Link href="#home">FAQ</Nav.Link>
                <Nav.Link href="#home">Privacy Policy</Nav.Link>
                <Nav.Link href="#home">Contact Us</Nav.Link>
            </Col>
        </Row>             
    </Navbar>
	</footer>
    );
  }
}

export default Footer;
