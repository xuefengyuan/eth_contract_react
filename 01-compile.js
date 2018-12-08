// 编译合约文件
// 导入solc编译器
let solc = require('solc');
let fs = require('fs');

let sourceCode = fs.readFileSync('./contracts/SimpleStorage.sol','utf-8');

let output = solc.compile(sourceCode,1);

// console.log(output);
// console.log('abi',output['contracts'][':SimpleStorage']['interface']);

module.exports = output['contracts'][':SimpleStorage']