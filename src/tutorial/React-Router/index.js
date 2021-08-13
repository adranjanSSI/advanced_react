import React from 'react'
import About from './About';
import Home from './Home';
import NavBar from './NavBar';
import Error from './Error';
import People from './People';
import Person from './Person';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";/*we want to use our router in our web 
page so that we would require a router which can route or 
components to these respective links and we would lso require some king of 
switch to enable or disable our router.*/
function ReactRouterDom() {
    return (
        <Router>
            <Route path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/error">
                <Error/>
            </Route>
            <Route path="/people">
                <People/>
            </Route>
            
            
        </Router>
    )
}

export default ReactRouterDom
