import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="main-container">
          <Row className="header-container">
            <Navbar className="header">
              <div className="brand" href="/">Split<span>Cash</span></div>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/how-to/">F.A.Q</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </Row>
          <Row className="info-container">
            <Col>
              <h2>Fair games that pay Ether</h2>
              <div>
                <p>Provably fair bets backed by simple open-sourced contract</p>
                <p>No sign-ups or deposits, just 1% edge and jackpot!</p>
              </div>
              <Button size="lg" className="faq-btn">HOW TO PLAY?</Button>
            </Col>
          </Row>
          <Row className="games-container">
            <Col>
              <div >
                <img className="lottery" src={lottery}/>
                <h4>Lottery</h4>
                <p>Wan't to try old school?
Play our lottery, up to 10x</p>
              </div>
              <Button className="play-btn">PLAY NOW</Button>
            </Col>
            <Col>
              <div className="unavaliable">
                <img className="lottery" src={lottery}/>
                <h4>Lottery</h4>
                <p>Wan't to try old school?
Play our lottery, up to 10x</p>
              </div>
              <Button disabled className="play-btn">PLAY NOW</Button>
            </Col>
            <Col>
              <div className="unavaliable">
                <img className="lottery" src={lottery}/>
                <h4>Lottery</h4>
                <p>Wan't to try old school?
Play our lottery, up to 10x</p>
              </div>
              <Button disabled className="play-btn">PLAY NOW</Button>
            </Col>
            <Col>
              <div className="unavaliable">
                <img className="lottery" src={lottery} />
                <h4>Lottery</h4>
                <p>Wan't to try old school?
Play our lottery, up to 10x</p>
              </div>
              <Button disabled className="play-btn">PLAY NOW</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
