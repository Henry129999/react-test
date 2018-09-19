#1. 首先在项目所在目录运行，npm init -y  快速初始化项目

    接下来会自动创建一个webpack.json 文件，以后所有的安装包的记录都会放在这里面

#2. 在项目根目录创建 `src` 和 `dist` 的产品发布的目录

#3. 在src中创建 index.html(首页) 和 main.js(webpack打包的入口文件)

#4. 安装webpack  npm i webpack -D  //   npm i webpack-cli -D

#5. 创建打包配置对象

#6. 将main.js改为index.js (打包入口文件)

#7. 打包输出文件是 dist => mian.js

#8. cnpm i html-webpack-plugin -D  帮我们将页面生成到内存中去
-----------------------------------------------------------------------------------------

在项目中使用react 

#1. 安装包 cnpm i react react-dom -s 
	
	react: 专门用于创建组件和虚拟DOM的,同时组件的生命周期都在这个包中
	react: 专门进行DOM操作的，最主要的应用场景，就是ReactDOM.render()

#2. 在js中不能写html代码，安装 `babel` 来转换 这些js 中的标签  （jsx语法）

	cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
	cnpm i babel-preset-env babel-preset-stage-0 -D

#3. 安装能够识别转换jsx语法的包 babel-preset-react
	
	运行 cnpm i babel-preset-react -D


#4. 新建  `.babelrc1` 文件，来对引入的第三方模块进行解释 

	其中“presets” 放入语法
	其中“plugins” 放入插件  

#5. resolve: {
        extensions: ['.js', '.jsx', '.json'] //表示，这几个文件的后缀名，可以省略不写
    }