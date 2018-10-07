import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as PIXI from 'pixi.js'
export default class Table extends Component {
  constructor (props) {
    super()
  }
  componentDidMount () {
    this.app = new PIXI.Application({
      width: window.innerWidth, // default: 800
      height: window.innerHeight / 2, // default: 600
      antialias: true, // default: false
      transparent: false, // default: false
      forceCanvas: true, // only canvas;
      resolution: 1 // default: 1
    })
    this.app.renderer.backgroundColor = 0xededed
    this.gameCanvas.appendChild(this.app.view)
    console.log(this.gameCanvas)

    let circle = new PIXI.Graphics()
    // circle.beginFill(0x9966FF);
    circle.beginFill(0x9966ff)
    circle.drawEllipse(0, 0, window.innerWidth / 2, window.innerHeight / 2 / 2)
    circle.endFill()
    circle.x = window.innerWidth / 2
    circle.y = window.innerHeight / 2 / 2
    circle.interactive = true
    circle.on('pointerdown', e => {
      this.props.setClickedPoints({
        x: e.data.global.x,
        y: e.data.global.y,
        clicked: true
      })
      // alert(1)
    })
    this.app.stage.addChild(circle)
    this.app.start()
  }
  componentDidCatch (e) {
    console.log(e)
  }
  componentWillUnmount () {
    this.app.stop()
  }
  render () {
    console.log(this.props)
    const that = this
    const { isFound } = this.props
    return (
      <div
        className="currentSector"
        ref={thisDiv => {
          that.gameCanvas = thisDiv
        }}
      >
        1
      </div>
    )
  }
}
