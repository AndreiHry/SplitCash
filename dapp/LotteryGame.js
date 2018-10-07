import React, { Component } from 'react'
import './lottery-game.css';
export default class LotteryGame extends Component {
	render() {
		return (
			<div className="lottery-game-container">
				<h3>Lottery</h3>
				<div className="ticket">
					<h5>The Ticket</h5>
					<div className="choice-row"><span id="choice_1">⬤</span><span id="choice_2">⬤</span><span id="choice_3">⬤</span></div>
					<div className="choice-row"><span id="choice_4">⬤</span><span id="choice_5">⬤</span><span id="choice_6">⬤</span></div>
				</div>
			</div>
		)
	}
}
