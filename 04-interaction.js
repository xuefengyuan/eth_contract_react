// 与合约交互
// 1. 导入合约实体
// 2. 读取数据
// 3. 写入数据
// 4. 读取数据

let instance = require('./03-instance')

// 访问合约的地址
const account = '0xCc1f8cEc8b5903c31eAfc13387A8fBAd38B5F5f8'
// web3与区块链交互的返回值都是promise，可以直接使用async/await
let contract = async () =>{
    // 读取合约的数据，记住不要忘了加await
    let v1 = await instance.methods.getValue().call();
    console.log('data',v1);
    // 往合约写入数据，返回的是当前合约写入的区块信息
    let res = await instance.methods.setValue('Hello Test Set Data').send({
       from:account,
       value:0,
    });
    console.log('res: ',res)

    // 重新获取合约的数据
    let v2 = await instance.methods.getValue().call();
    console.log('data',v2);

}

contract()


