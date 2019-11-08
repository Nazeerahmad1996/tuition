import React, { Component } from "react";
import firebase from "firebase";
import { ButtonNavbar, Navbar, Nav, Carousel } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar bg="success" variant="dark">
                    <Navbar.Brand >Tutor App</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about" active>About</Nav.Link>
                        <Nav.Link href="/contact" active>Contact Us</Nav.Link>
                    </Nav>
                </Navbar>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/trendewardrobe.appspot.com/o/images%2Fbg1.jpg?alt=media&token=8524dbd5-3204-4b11-b084-1da106c29946"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/trendewardrobe.appspot.com/o/images%2Fbg3.jpg?alt=media&token=a349998a-2aee-47e1-a5f8-4c605f82e8d1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/trendewardrobe.appspot.com/o/images%2Fbg1.jpg?alt=media&token=8524dbd5-3204-4b11-b084-1da106c29946"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



{/* adminaccess() {
        if (this.state.email === 'adminhammad@admin.com' && this.state.psw === 'adminhammad') {
            history.push("/admin6c26b855-c9c6-438a-ba70-2acaf7f9e7d7")
        }
        else (
            alert('invalid email & password')
        )
        this.setState({
            email: '',
            psw: '',
        })
    } */}
                
            </div>
        );
    }
}
