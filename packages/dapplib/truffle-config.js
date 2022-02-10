require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool response rural mixed install kite surge soft'; 
let testAccounts = [
"0x78fd873797d9ffc029a5a09b4f2ddb1e1026a0d683cd669be729fd72525dc09e",
"0x588a6e1d548ee60fc77949414b48b96e32d8f73ee59d37e63bd8984c8a258c43",
"0xacf2a9679c479988d5dea8871855726f735073dc23ce76a408ad7898fa7de0ff",
"0x6f7d7db21aa9e0560062a9ea938f315b6577af4733fb616542b73b7d42238f4d",
"0x8f59233ce704bcbe09da2169189b943ad77bcc539756c11ab282abb6d89cb30d",
"0x9834e6fc54f21c43326034f41adce67c7bc4d7078e5d4dfe1adfd44ce54c11a1",
"0x9c406364416bc025ac47c2cef90a5c0a761a9ef4bfc60e10d23ef95886f84777",
"0x95393fa2f42426ee3a683581cad42a7a4451696e4740354d3bf74bf12e7a2bdb",
"0x673ef3c0be4c0e561e7b2ac2730eb2646ffde64397acceb37ed52f3dee31ddb4",
"0xaae5b1dd587f4cfdd18a3e22bbdbb3e0705a29f5933b252bf7229a0e0348fc1f"
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

