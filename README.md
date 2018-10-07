# Start from DC-CLI:

```
dc-cli create magnusducatuslt/SDK-ReactJS <your repo>
```

Call:

- npm i
- npm run start

**_Important developer note_**

This build includes source code of the DCLib.
`dapp/src/ - dir for develop dapp/index.js` entry file with an example `dapp/src/dapp.logic.js` customized file, put your game logic into it.

```
//import dapp.logic.js into dapp/index.js
import dappLogicInit from "./dapp.logic.js";
```

Paste slug of your game manually into dapp/index.js

```
//place where we directly
componentDidMount () {
    DCLib.on('ready', function () {
      dappLogicInit(DCLib, 'dice_ex_v1')
      DCLib.Account.initAccount(function () {
```

Put the "slug"(game name) parameter directly into dapp/dapp.logic.js

```
const defineDAppLogic = (DCLib, slug) => {
  DCLib.defineDAppLogic(slug, function(payChannel) {
    //your logic
  });
};
export default defineDAppLogic;
```

To amanually change user address, in `./src/Eth/Account.js` uncomment the `_wallet.openkey` and `let privateKey` strings.

```
// _wallet.openkey = '0x82226bfe2191E5763e764A07fdDc1cF7aD538AbD'
// let privateKey =
//   '731FB8938F1BC00F754CEB4CAD5351946C2E4C9D82D936D2CF3AA3563080F5B4';
```

and comment

```
let privateKey =
  (await this.getAccountFromServer()) ||
  this.web3.eth.accounts.create().privateKey;
```
