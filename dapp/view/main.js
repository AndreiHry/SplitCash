import './index.styl'

/*
STEP 1
private key - create account

STEP 2
init dapp

STEP 3
find bankrollers
connect

STEP 4
play

STEP 5
show balance results
disconnect

Congratulations
STEP 6 - get started
 Instructions

*/

const screens = {
  'step-1':{
    html : `
<p>First you need to send ethereum account in DCLib </p>
<input name="privkey" type="text" placeholder="Insert privatekey" required minlength="66" maxlength="66" />
<p>You can find accounts private keys for local environment in _env/README.md</p>
<p></p>
<p>Code Example<pre>DCLib.Account.create(privkey, '1234')</pre></p>
`,
    init (callbacks) {
      const input = document.querySelector('input[name="privkey"]')
      const E = e => {
        if (!e.target.validity.valid) return

        // e.preventDefault()
        e.target.disabled = true
        if (callbacks.privkeySet) {
          callbacks.privkeySet(e.target.value)
          return
        }
        e.target.disabled = false
      }
      input.onpaste  = E
      input.onkeyup  = E
      input.onсhange = E

      setTimeout(() => {
        input.value = '0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3'
      }, 9999)
    }

  },

  'step-2':{
    html : 'hello <a href="#next">next step</a>',
    init: function () {

    }
  }
}

export default new class View {
  constructor (mountPointSelector = 'body') {
    this.mountPoint = this.setMountPoint(mountPointSelector)
  }

  setMountPoint (mountPointSelector) {
    this.mountPoint = document.querySelector(mountPointSelector)
  }

  show (screenName = 'step-1', callbacks = {}) {
    this.mountPoint.innerHTML = `<div class="screen ${screenName}">${screens[screenName].html}</div>`
    screens[screenName].init(callbacks)
  }

  // methods
}()
