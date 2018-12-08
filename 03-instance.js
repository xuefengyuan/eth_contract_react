// 获取合约实例
let {bytecode,interface} = require('./01-compile');
// 1.引入web3
let Web3 = require('web3');
// 2.new一个web3实例
let web3 = new Web3();
// 3.设置网络
web3.setProvider('http://127.0.0.1:7545');

let abi = [{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_str","type":"string"}],"name":"setValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_str","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

// 已经部署的合约地址
let address = '0xB2a79599C52125F7A44ccbEbf418bA06c441995D';
// 获取合约实例
let contractInstance = new web3.eth.Contract(abi,address);

console.log('address : ',contractInstance.options.address)

module.exports = contractInstance




