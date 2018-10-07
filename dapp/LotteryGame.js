import React, { Component } from 'react'
import {Button} from 'reactstrap';
import './lottery-game.css';
export default class LotteryGame extends Component {
	constructor(){
		super();
		this.state = {
			bet : 1,
			choice: null,
			balance: null
		}
	}

	handleClick(e) {
		const userChoice = parseInt(e.target.id.substr(-1));
		document.querySelector('.choice-row .active') ? document.querySelector('.choice-row .active').classList.remove('active') : console.log('#user choice',userChoice);
		document.querySelector(`#choice_${userChoice}`).classList.toggle('active');
		this.setState({...this.state, choice:userChoice});
	}

	makeRoll = (userBet, ...args) => {
		console.log(...{ name: 1, hui: 2 })
		const random_hash = DCLib.randomHash({
		  bet: userBet,
		  gamedata: [...args]
		})
		console.log(random_hash)
		 window.Lottery.Game(userBet, userData, random_hash).then(function (result) {
		   console.log('result', result)
		   this.renderGames()
		   const balance = window.Lottery.Game.payChannel.getBalance();
		   this.setState({...this.state, balance});
		  $('#user_bet').max = ubets
		 })
	  }

	handleBetChange(e) {
		const value = e.target.value;
		console.log(value);
		this.setState({bet:value});
	}

	render() {
		return (
			<React.Fragment>
			<div className="lottery-game-container">
				<h3>Lottery</h3>
				<div className="ticket">
					<h5>The Ticket</h5>
					<div className="choice-row">
						<span id="choice_1" onClick={e => this.handleClick(e)}>⬤</span>
						<span id="choice_2" onClick={e => this.handleClick(e)}>⬤</span>
						<span id="choice_3" onClick={e => this.handleClick(e)}>⬤</span>
					</div>
					<div className="choice-row">
						<span id="choice_4" onClick={e => this.handleClick(e)}>⬤</span>
						<span id="choice_5" onClick={e => this.handleClick(e)}>⬤</span>
						<span id="choice_6" onClick={e => this.handleClick(e)}>⬤</span>
					</div>
				</div>
			</div>
			<div className="user-bet-container">
				<label className="bet">{this.state.bet}</label>
				<input type="range" min="1" step="1" max="10" onChange={(e) => this.handleBetChange(e)} />
				<Button color="danger" className="bet-btn">BET!</Button>
			</div>
			</React.Fragment>
		)
	}
}
