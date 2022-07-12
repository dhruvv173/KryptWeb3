// https://eth-goerli.g.alchemy.com/v2/QQAdoNI5bb-YChYWg01RXiLrDLXd4D48

require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity: '0.8.0',
  networks:{
    goerli:{
      url: ' https://eth-goerli.g.alchemy.com/v2/QQAdoNI5bb-YChYWg01RXiLrDLXd4D48',
      accounts: ['275d6edf85fa6f2096f8a4f19966900edb1fb04821bc6e6c44d8b984edac5a2a']
    }
  }
}