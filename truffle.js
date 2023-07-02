// Allows us to use ES6 in our migrations and tests.
require('babel-register')

var HDWalletProvider = require('truffle-hdwallet-provider')
var mnemonic = ''


module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'http://70.34.216.42:9933')
      },
      network_id: 42,
      gasPrice: 6000000000
}
},
 solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    } 
  }
};
