#Start
git clone -b reactDappVersion https://github.com/DaoCasino/SDK.git

npm i

npm start

#for develop
This build include source code of DCLib.

dapp/src/ - dir for develop
dapp/index.js - entry file with example
dapp/src/dapp.logic.js - custom solution! in this file you must paste logic of your game.

```javascript
//import dapp.logic.js into dapp/index.js
import dappLogicInit from "./dapp.logic.js";
```

paste slug of your game manually in dapp/index.js

```javascript
//place where we directly
componentDidMount () {
    DCLib.on('ready', function () {
      dappLogicInit(DCLib, 'dice_ex_v1')
      DCLib.Account.initAccount(function () {
```

passing a parameter "slug"(game name) directly in dapp/dapp.logic.js

```javascript
const defineDAppLogic = (DCLib, slug) => {
  DCLib.defineDAppLogic(slug, function(payChannel) {
    //your logic
  });
};
export default defineDAppLogic;
```

for manual change user address do this:
in ./src/Eth/Account.js uncomment strings "\_wallet.openkey" and "let privateKey"

```javascript
// _wallet.openkey = '0x82226bfe2191E5763e764A07fdDc1cF7aD538AbD'
// let privateKey =
//   '731FB8938F1BC00F754CEB4CAD5351946C2E4C9D82D936D2CF3AA3563080F5B4';
```

amnd comment

```javascript
let privateKey =
  (await this.getAccountFromServer()) ||
  this.web3.eth.accounts.create().privateKey;
```
