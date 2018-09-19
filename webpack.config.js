//向外暴露一个打包的配置项；因为webpack是基于node构建的；所以webpack支持所有的Node API 和 语法
const path  = require('path');
//导入 在内存中自动生成 index 页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin');

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'), //源文件
    filename: 'index.html'  //生产内存中首页的名称
});

//webpack 默认只能打包js文件，其他类型文件要用第三方默认规则
module.exports = {
    //mode 是 4.x中的新增选项
    mode: 'development',  //development开发模式 production生产模式
    //webapck 约定供大于配置，默认的打包入口路径就是 src=> index.js
    plugins: [
        htmlPlugin
    ],
    module: { //所有第三方模块的配置
        rules: [ //第三方规则
            { test: /\.js|jsx$/,use:'babel-loader',exclude:/node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'] //表示，这几个文件的后缀名，可以省略不写
    }
         
}