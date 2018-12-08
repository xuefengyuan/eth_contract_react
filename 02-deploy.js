// 部署合约文件

// 导入合约实体
let {bytecode, interface} = require('./01-compile');

// console.log('bytecode',bytecode)
// console.log('interfaces',interface)

// 1.引入web3
let Web3 = require('web3');
// 2.new一个web3实例
let web3 = new Web3();
// 3.设置网络
web3.setProvider('http://127.0.0.1:7545');

// 部署合约的地址
const account = '0xe49e9b7DDf7B0e8542665DA37Ee433c8f2931F0c'

// 1.拼接合约数据 interface
let contract = new web3.eth.Contract(JSON.parse(interface));

// 2.拼接bytecode
contract.deploy({
    data: bytecode,   // 合约的bytecode
    arguments: ['Hello World']  // 给构造函数传递参数，使用数组
}).send({  // 部署合约
    from: account,
    gas: '3000000' ,// 不要用默认值，一定要写大一些， 要使用单引号
    // gasPrice: '1',
}).then(instance => {
    // 打印合约部署的地址
    console.log('address: ', instance.options.address)
})








