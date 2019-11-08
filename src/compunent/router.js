import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Signup from "./signup";
import Login from "./login";
import Home from "./Home";
import Apphistory from './history'

export default class Routers extends Component {
    render() {
        return (
            <Router history={Apphistory}>
                <Route exact path="/" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
            </Router>
        );
    }
}