import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../layout/Navbar';

export class Contact extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navbar/>
                </React.Fragment>
            </Router>
        )
    }
}

export default Contact
