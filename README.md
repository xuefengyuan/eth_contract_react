# etherlane_contract_react
以太坊合约web3交互

项目是基于React框架下开发的，所以请自行构建。项目不上传完成的代码，只上传与合约交互相关的代码。

### solidity编译器

使用的是0.4.25版本，不要安装错了，package.json文件也会一起上传

```shell
npm install solc@0.4.25
```

### web3

```shell
npm install web3
```

把项目git clone下来后，也可以直接复制到对应的项目下直接运行，不过记得装上面两个插件



### contracts目录

该目录下的为合约文件

### 01-compile

编译合约文件

### 02-deploy

部署合约文件

### 03-instance

获取合约实例文件

### 04-interaction

与合约交互文件

### 注意：

项目是在GoLandIDE下开发的，注意环境配置，要记得下载node插件。

新项目导入还需要再配置下Node模块Settings -> Languages & Frameworks -> JavaScript ->Libraries ->Add

在弹出框中填入名称（自定义），下拉选择Node.js 再选中Global 点击OK

以上项目中地址均为本地测试地址，所以想拿地址弄钱的，请换别处吧。

