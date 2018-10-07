var Migrations = artifacts.require('./Migrations.sol')
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";
module.exports = function (deployer, network) {
  if (network === 'development' || network === 'develop' || network === 'coverage') {
    deployer.deploy(Migrations)
  }
}
