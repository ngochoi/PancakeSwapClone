

var HDWalletProvider = require("truffle-hdwallet-provider");

// const infuraKey = '6c3246d965da4533b6aec7b634bacbc4';
var mnemonic = "donate code decorate sorry code actress voyage apart soul garbage year exile";


module.exports = {

  networks: {

    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        'https://data-seed-prebsc-1-s1.binance.org:8545'
      ),
      network_id: 97,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        'https://bsc-dataseed.binance.org/'
      ),
      network_id: 56,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan :'4XD9GGDHPV5ZZV8DNUSM25QUPPMI6S7VQG'
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       }
      //  evmVersion: "byzantium"
      // }
    }
  }
};

//@truffle/hdwallet-provider@1.2.3
// const path = require("path");
// const HDWalletProvider = require('@truffle/hdwallet-provider');
// // const infuraKey = "fj4jll3k.....";
// //
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

// module.exports = {

//  //contracts_build_directory: path.join(__dirname, "birb-dapp-ui/src/contracts"),

 

//  networks: {
  
//    //
//    // development: {
//    //  host: "127.0.0.1",     // Localhost (default: none)
//    //  port: 8545,            // Standard Ethereum port (default: none)
//    //  network_id: "*",       // Any network (default: none)
//    // },
//    // Another network with more advanced options...
//    testnet: {
//      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
//      network_id: 97,
//      confirmations: 10,
//      timeoutBlocks: 200,
//      skipDryRun: true
//    },
//    // bsc: {
//    //   provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
//    //   network_id: 56,
//    //   confirmations: 10,
//    //   timeoutBlocks: 200,
//    //   skipDryRun: true
//    // },
//  },

//  // Set default mocha options here, use special reporters etc.
//  mocha: {
//    // timeout: 100000
//  },

//  // Configure your compilers
//  compilers: {
//    solc: {
//       version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
//      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
//      // settings: {          // See the solidity docs for advice about optimization and evmVersion
//      //  optimizer: {
//      //    enabled: false,
//      //    runs: 200
//      //  },
//      //  evmVersion: "byzantium"
//      // }
//    }
//  },



//  db: {
//    enabled: false
//  }
// };