import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../layout/Navbar'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
    };
  
export class Localisation extends Component {
    render() {
        return (
            
            <Router>
                <React.Fragment>
                    <Navbar/>
                
                    <Map 
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 47.444, lng: -122.176}}
                    />
                    
                </React.Fragment>
            </Router>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
  })(Localisation);
