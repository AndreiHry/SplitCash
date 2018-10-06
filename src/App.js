import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Container
} from 'reactstrap';
import './App.css';
import LotteryGame from './LotteryGame';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="main-container">
          <Route path='/' exact component={Main} />
          <Route path='/lottery' component={LotteryGame} />
        </Container>
      </div>
    );
  }
}

export default App;
