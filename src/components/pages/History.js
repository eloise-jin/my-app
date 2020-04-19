import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../layout/Navbar'


export class History extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navbar/>
                    <p>Here you will find the history of your luggage tracker</p>
                 
                </React.Fragment>
            </Router>
        )
    }
}

export default History
