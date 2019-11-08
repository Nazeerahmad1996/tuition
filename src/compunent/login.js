import React, { Component } from "react";
import firebase from "firebase";
import { Navbar, Nav } from 'react-bootstrap';
import history from "./history";
import '../App.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            psw: '',
        };

        this.emailChange = this.emailChange.bind(this);
        this.pswChange = this.pswChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailChange(event) {
        this.setState({ email: event.target.value });
    }

    pswChange(event) {
        this.setState({ psw: event.target.value });
    }

    handleSubmit() {
        if (this.state.email !== '' && this.state.psw !== '') {

            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.psw)
                .then(() => {
                    history.push("/home")
                    this.setState({
                        email: '',
                        psw: '',
                    })
                })

        } else {
            alert('please fill all the fields')
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="success" variant="dark">
                    <Navbar.Brand >Tutor App</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Register</Nav.Link>
                        <Nav.Link href="/login" active>Login</Nav.Link>
                    </Nav>
                </Navbar>
                {/* <br /> */}
                <div className="MainDiv">
                    <div className='rgb text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                        <MDBContainer>
                            <MDBRow style={{ display: 'flex', justifyContent: 'center' }}>
                                <MDBCol md="6">
                                    <MDBCard>
                                        <MDBCardBody className="mx-4">
                                            <div className="text-center">
                                                <h3 className="dark-grey-text mb-5">
                                                    <strong>Sign in</strong>
                                                </h3>
                                            </div>
                                            <MDBInput
                                                label="Your email"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.email} onChange={this.emailChange}
                                            />
                                            <MDBInput
                                                label="Your password"
                                                group
                                                type="password"
                                                validate
                                                containerClass="mb-0"
                                                value={this.state.psw} onChange={this.pswChange}
                                            />
                                            <p className="font-small blue-text d-flex justify-content-end pb-3">
                                                Forgot
                <a href="#!" className="blue-text ml-1">

                                                    Password?
                </a>
                                            </p>
                                            <div className="text-center mb-3">
                                                <MDBBtn
                                                    type="button"
                                                    gradient="blue"
                                                    rounded
                                                    className="btn-block z-depth-1a"
                                                    onClick={this.handleSubmit}
                                                >
                                                    Sign in
                </MDBBtn>
                                            </div>


                                        </MDBCardBody>
                                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                                            <p className="font-small grey-text d-flex justify-content-end">
                                                Not a member?
                <a href="#!" className="blue-text ml-1">

                                                    Sign Up
                </a>
                                            </p>
                                        </MDBModalFooter>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
                {/* <div style={{ "margin": "0 auto", "border": "1px solid gainsboro", "padding": "2%", "boxShadow": "0 0 15px gray", "width": "70%" }}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.emailChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.psw} onChange={this.pswChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={this.handleSubmit}>
                        Login
                      </Button>
                </div> */}

            </div>
        );
    }
}
