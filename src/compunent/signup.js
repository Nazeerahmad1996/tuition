import React, { Component } from "react";
import firebase from "firebase";
import { Button, Navbar, Nav, Form } from 'react-bootstrap';
import history from "./history";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import '../App.css';



export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            psw: '',
        };

        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.pswChange = this.pswChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nameChange(event) {
        this.setState({ name: event.target.value });
    }

    emailChange(event) {
        this.setState({ email: event.target.value });
    }

    pswChange(event) {
        this.setState({ psw: event.target.value });
    }

    handleSubmit() {
        if (this.state.name !== '' && this.state.email !== '' && this.state.psw !== '') {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.psw)
                .then(() => {
                    history.push("/home")
                    this.setState({
                        name: '',
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
                        <Nav.Link href="/" active >Register</Nav.Link>
                        {/* <Nav.Link href="/Register" active style={{"color":"black"}}>Register</Nav.Link> */}
                        {/* style={{"color":"black", }} */}
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar>

                <div className="MainDiv">
                    <div className='rgb text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                        <MDBContainer>
                            <MDBRow style={{ display: 'flex', justifyContent: 'center' }}>
                                <MDBCol md="6">
                                    <MDBCard>
                                        <MDBCardBody className="mx-4">
                                            <div className="text-center">
                                                <h3 className="dark-grey-text mb-5">
                                                    <strong>Sign Up</strong>
                                                </h3>
                                            </div>
                                            <MDBInput
                                                label="Name"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.name} onChange={this.nameChange}
                                            />
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
                                                    Sign Up
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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={this.nameChange} />
                    </Form.Group>

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
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Sign up as</Form.Label>
                        <Form.Control as="select">
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Parent</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={this.handleSubmit}>
                        Register
                      </Button>
                </div> */}

            </div>
        );
    }
}
