require('babel-register');
require('babel-polyfill');

module.exports = {
    networks: {
        develpment: {
            host: '127.0.0.1',
            port: '7545',
            network_id: '*' //Connect to any network.
        }
    },
    contracts_directory: './src/contracts',
    contracts_build_directory: './src/truffle_abis',
    compilers: {
        solc: {
            verison: '^0.5.0',
            optimizer: {
                enable: true,
                runs: 200,
            }
        }
    } 
}