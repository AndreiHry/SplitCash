import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import lottery from './img/lottery.png'
import {
  Container, Row, Col, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownItem
} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import LotteryGame from './LotteryGame';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="main-container">
        <Route path='/' component={Main}/>
        </Container>
        <Container>
          <Route path='/lottery' component={LotteryGame}/>
        </Container>
      </div>
    );
  }
}

export default App;
