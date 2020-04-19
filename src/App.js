import React, { Component } from 'react'
import './App.scss'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from "react-router-dom";
  
import Registration from './components/layout/Registration';
import Home from './components/pages/Home';
import Location from './components/pages/Localisation';
import History from './components/pages/History';
import Contact from './components/pages/Contact';

export class App extends Component {

    render() {
        
        return (
            
            <Router>

                <switch>
                    <Route path="/" exact strict component={Registration} />
                    <Route path="/home" component={Home} />
                    <Route path="/localisation" component={Location} />
                    <Route path="/history" component={History} />
                    <Route path="/contact" component={Contact} />
                </switch>
              

            </Router>
        );
    }
}

export default App
