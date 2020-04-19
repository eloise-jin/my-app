import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';


export class Home extends Component {
    
    render() {

        
        return (

            
            <Router>
                
                <React.Fragment>
            
                    <Navbar/>
                    <p>Group project of five second-year ENSEA students</p>
                    <Footer/>
                </React.Fragment>
            </Router>
        )
    }
}

export default Home




