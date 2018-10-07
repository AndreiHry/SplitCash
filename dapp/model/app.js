/* global DAppsLogic */


export default new class myDapp {
  constructor () {
    this.DApp = false
  }

  async init (dappConfig) {
    if (this.DApp && this.DApp.web3) {
      console.warn('Dapp allready created')
      return
    }

    await this.checkLogicExistAndLoaded()

    // Create new Dapp
    // link to doc: @TODO
    this.DApp = new DCLib.DApp(dappConfig)


    // for debug in browser console
    if (typeof window !== 'undefined') window.myDApp = this.DApp

    console.groupCollapsed('Dapp created')
    console.log(this.DApp)
    console.groupEnd()
  }

  startGame () {

  }

  play () {

  }

  endGame () {

  }

  checkLogicExistAndLoaded (callback = false) {
    return new Promise((resolve, reject) => {
      let i
      let c = setInterval(() => {
        i++
        if (DAppsLogic[process.env.DAPP_SLUG]) {
          clearInterval(c)

          this.logicExist = true
          resolve(this.logicExist)
          if (callback) callback(this.logicExist)
        } else if (i > 100) {
          clearInterval(c)
          this.logicExist = true
          reject(this.logicExist)
          if (callback) callback(this.logicExist)
        }
      }, 100)
    })
  }
}()
