import React, { Component,useState  } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Routes from "./Routes";

import { AppContext } from "./libs/contextLib";

import { Link } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";



class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <div class='top'>
            <p>James's junkfood truck</p>
            <br></br><br></br>
            </div>
              <Navbar/>
              <Routes />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;

