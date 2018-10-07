import 'config/dclib'

import SW from 'ServiceWorker/SW'

// import MyDApp from 'app'
import 'babel-polyfill'
import 'view/main'
import DCLib from './DCCore/index.js'
import dappLogicInit from './dapp.logic.js'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Table from './components/Table.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      game: {
        status: '',
        result: '',
        methodes: {},
        clickedPlace: {
          x: '',
          y: '',
          clicked: false,
          isOpen: false
        }
      },
      participants: {
        player: {
          account: '',
          bet: '',
          eth: ''
        },
        bankroller: {
          isFound: false,
          address: '',
          account: ''
        }
      },
      inputValue: {
        numValue: 0,
        betValue: 0,
        depositeValue: 0
      }
    }
  }
  componentDidMount () {
    const that = this
    const { participants } = this.state

    DCLib.on('ready', function () {
      dappLogicInit(DCLib, 'dice_ex_v1')
      DCLib.Account.initAccount(function () {
        participants.player.account = DCLib.Account
        // $('#user_address').html(
        //   '<a target="_blank" href="https://ropsten.etherscan.io/address/' +
        //     DCLib.Account.get().openkey +
        //     '">' +
        //     DCLib.Account.get().openkey +
        //     '</a>'
        // )
        // $('#faucet').attr(
        //   'href',
        //   'https://platform.dao.casino/faucet?to=' + DCLib.Account.get().openkey
        // )
        window.Dice = new DCLib.DApp({
          slug: 'dice_ex_v1',
          contract: {
            address: '0x674f8b960d103ccbabc0b0201da0cd52b9f5d352',
            abi: JSON.parse(
              '[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"disputes","outputs":[{"name":"disputeSeed","type":"bytes32"},{"name":"disputeBet","type":"uint256"},{"name":"initiator","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_session","type":"uint256"},{"name":"_disputeBet","type":"uint256"},{"name":"_gameData","type":"uint256[]"},{"name":"_disputeSeed","type":"bytes32"},{"name":"_sign","type":"bytes"}],"name":"openDispute","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_gameData","type":"uint256[]"},{"name":"_bet","type":"uint256"}],"name":"getProfit","outputs":[{"name":"_profit","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"playerWL","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_N","type":"bytes"},{"name":"_E","type":"bytes"},{"name":"_rsaSign","type":"bytes"}],"name":"resolveDispute","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_playerBalance","type":"uint256"},{"name":"_bankrollerBalance","type":"uint256"},{"name":"_totalBet","type":"uint256"},{"name":"_session","type":"uint256"},{"name":"_sign","type":"bytes"}],"name":"updateChannel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"config","outputs":[{"name":"maxBet","type":"uint256"},{"name":"minBet","type":"uint256"},{"name":"gameDevReward","type":"uint8"},{"name":"bankrollReward","type":"uint8"},{"name":"platformReward","type":"uint8"},{"name":"refererReward","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"channels","outputs":[{"name":"state","type":"uint8"},{"name":"player","type":"address"},{"name":"bankroller","type":"address"},{"name":"playerBalance","type":"uint256"},{"name":"bankrollerBalance","type":"uint256"},{"name":"totalBet","type":"uint256"},{"name":"session","type":"uint256"},{"name":"endBlock","type":"uint256"},{"name":"RSAHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rsa","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"signature","type":"bytes"}],"name":"recoverSigner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_sigseed","type":"bytes"},{"name":"_min","type":"uint256"},{"name":"_max","type":"uint256"}],"name":"generateRnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_playerBalance","type":"uint256"},{"name":"_bankrollerBalance","type":"uint256"},{"name":"_totalBet","type":"uint256"},{"name":"_session","type":"uint256"},{"name":"_close","type":"bool"},{"name":"_sign","type":"bytes"}],"name":"closeByConsent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_gameData","type":"uint256[]"},{"name":"_bet","type":"uint256"},{"name":"_sigseed","type":"bytes"}],"name":"game","outputs":[{"name":"_win","type":"bool"},{"name":"_amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"developer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"safeTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"refContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_player","type":"address"},{"name":"_bankroller","type":"address"},{"name":"_playerBalance","type":"uint256"},{"name":"_bankrollerBalance","type":"uint256"},{"name":"_openingBlock","type":"uint256"},{"name":"_gameData","type":"uint256[]"},{"name":"_N","type":"bytes"},{"name":"_E","type":"bytes"},{"name":"_sign","type":"bytes"}],"name":"openChannel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gameWL","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"}],"name":"closeByTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_gameData","type":"uint256[]"},{"name":"_bet","type":"uint256"}],"name":"checkGameData","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_ref","type":"address"},{"name":"_gameWL","type":"address"},{"name":"_playerWL","type":"address"},{"name":"_rsa","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"action","type":"string"},{"indexed":false,"name":"id","type":"bytes32"},{"indexed":false,"name":"playerBalance","type":"uint256"},{"indexed":false,"name":"bankrollerBalance","type":"uint256"},{"indexed":false,"name":"session","type":"uint256"}],"name":"logChannel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"action","type":"string"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"id","type":"bytes32"},{"indexed":false,"name":"session","type":"uint256"},{"indexed":false,"name":"seed","type":"bytes32"}],"name":"logDispute","type":"event"}]'
            )
          },
          rules: {
            depositX: 2
          }
        })

        // Init interface
        that.initControllInterface()
        that.setState({ participants: participants })
      })
    })
  }
  initControllInterface = eventHandlers => {
    const that = this
    const { participants } = this.state
    let deposit_set = false
    const updateBalanceState = function () {
      DCLib.Account.info(function (info) {
        participants.player.bet = info.balance.bet
        participants.player.eth = info.balance.eth

        setTimeout(updateBalanceState, 30000)

        if (info.balance.bet > 0) {
          if (!deposit_set) {
            deposit_set = true
            var d = (info.balance.bet * 0.5).toFixed(2)
            if (d > 1) {
              d = 1
            }
          }
        }
        that.setState({ participants: participants })
      })
    }
    updateBalanceState()
  }
  startGame = deposit => {
    window.Dice.connect(
      {
        bankroller: 'auto',
        paychannel: { deposit: deposit },
        gamedata: { type: 'uint', value: [1, 2, 3] }
      },
      function (connected, info) {
        console.log('connect result:', connected)
        console.log('connect info:', info)
        if (!connected) return

        let maxbet = DCLib.Utils.dec2bet(info.channel.player_deposit)

        // $('#user_bet')[0].max = Math.ceil(maxbet)
        // $('#user_bet').val((maxbet * 0.1).toFixed(2))

        // $('body').addClass('cur-step-2').addClass('cur-step-3')
      }
    )
  }
  makeRoll = (user_bet, ...args) => {
    console.log(...{ name: 1, hui: 2 })
    const random_hash = DCLib.randomHash({
      bet: user_bet,
      gamedata: [...args]
    })
    console.log(random_hash)
    // window.Dice.Game(user_bet, user_num, random_hash).then(function (result) {
    //   console.log('result', result)
    //   this.renderGames()
    //   var ubets = window.Dice.Game.payChannel.getBalance()
    //   // $('#user_bet').max = ubets
    // })
  }
  endGame = () => {
    window.Dice.disconnect(function (res) {
      console.log('disconnect result', res)
    })
  }
  renderGames = history => {
    if (typeof Game === 'undefined') {
      window.Game = window.Dice.logic
    }
    history = history || window.Dice.Game.history
  }
  handleSubmitDeposite = () => {
    console.log('deposite', this.state.inputValue.depositeValue)
    const { depositeValue } = this.state.inputValue
    console.log('deposite value', depositeValue)
    this.startGame(depositeValue)
  }
  handleSubmitBet = () => {
    console.log('bet', this.state.inputValue.betValue)
    const { betValue, numValue } = this.state.inputValue
    this.makeRoll(betValue, numValue)
  }
  handleChangeInputDeposite = e => {
    console.log(e.target.value)
    const { inputValue } = this.state
    inputValue.depositeValue = e.target.value
    this.setState({ inputValue })
  }
  handleChangeInputBet = e => {
    const { inputValue } = this.state
    inputValue.betValue = e.target.value
    this.setState({ inputValue })
  }
  handleChangeInputNumberByPlayer = e => {
    const { inputValue } = this.state
    inputValue.numValue = e.target.value
    this.setState({ inputValue })
  }
  setClickedPoints = ({ x, y, clicked }) => {
    const { game } = this.state

    game.clickedPlace.x = x
    game.clickedPlace.y = y
    game.clickedPlace.clicked = clicked
    game.clickedPlace.isOpen = true
    // this.makeRoll(1, 1)
    // this.makeRoll(1, 1)
    this.makeRoll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    this.setState({ game: game })
  }
  render () {
    const that = this
    const { participants, inputValue } = this.state
    return (
      <div>
        <Status status={'status'} />
        <Account account={participants.player} />
        <Button
          onSubmit={that.handleSubmitDeposite}
          context={that}
          name={'Set'}
        />
        <Input
          onChange={that.handleChangeInputDeposite}
          context={that}
          name={'Deposite'}
          value={inputValue.depositeValue}
        />
        <Button onSubmit={that.handleSubmitBet} context={that} name={'Roll'} />
        <Input
          onChange={that.handleChangeInputBet}
          context={that}
          name={'Bet'}
          value={inputValue.bet}
        />
        <Input
          onChange={that.handleChangeInputNumberByPlayer}
          context={that}
          name={'number'}
          value={inputValue.numValue}
        />

        {
          <Table
            isFound={participants.bankroller.isFound}
            setClickedPoints={this.setClickedPoints}
          />
        }
      </div>
    )
  }
}
const Account = ({ account, context }) => {
  const componentData = {}
  if (account.account !== '') {
    componentData.address = account.account.get().openkey
    componentData.bet = account.bet
    componentData.eth = account.eth
  } else {
    componentData.address = 'wait for auth'
    componentData.bet = ''
    componentData.eth = ''
  }
  return (
    <div>
      <div className="address">Your address: {componentData.address}</div>
      <div className="balance">
        <div className="balance__bet">bet: {componentData.bet}</div>
        <div className="balance_eth">eth: {componentData.eth}</div>
      </div>
    </div>
  )
}
const Button = ({ name, context, onSubmit }) => {
  return (
    <div>
      <button
        onClick={onSubmit}
        ref={node => (context[`nodeButton${name}`] = node)}
        type="button"
      >
        {name}
      </button>
    </div>
  )
}
const Input = ({ onChange, name, context, value }) => {
  return (
    <div>
      <input
        ref={node => (context[`nodeInput${name}`] = node)}
        type="number"
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
const Status = ({ status }) => {
  return <div>{status}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

console.groupCollapsed('⚙︎ ENV Settings')
console.table(process.env)
console.groupEnd()

// Register Service Worker
if (process.env.DAPP_SW_ACTIVE) SW.register()
