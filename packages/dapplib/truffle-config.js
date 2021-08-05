require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rifle night proud gesture pet swap gaze'; 
let testAccounts = [
"0x90702ce22fc49faa5cad560eee2806ac7f5b262450ba536e86e08f208d81ce36",
"0xbc4139d3029948afed891e1b5bc49fa1e40a5856b677b09378571c01a60850e7",
"0x32556df1ab41df6a5d31902d02bed590406d26380deb2a0cf06c8ce827bcba74",
"0x1eecfe84ab6c81cd343aa4583e23f5fb07c0cbe1f551b7b77109d618a56b4037",
"0x9226ae4921d3427668655ede9aeae7dc2ee66ce75fa6cd1d74a79c0211614944",
"0x1edde76c6686debb313a95dcf0683221d00d043e093072362f276c2346107f0a",
"0x315a59d4a7929e0826e15df61f283302abec1b388d348b5a9487d4c692b4946a",
"0xfa2bcf8aafc8682a6e811d704783eacc27b4814fb1f5b0bba11e0435d2fa6f5d",
"0x2fd9cd88613ffda556aa7b32a9a99b756329abeecd8363a1f4012054b4f8dfeb",
"0xaba6d11e6f3aa54638188ac6fcd2deb5581f10b1e39a9b6107933822419ef7ab"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

