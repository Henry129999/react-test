//webpack打包的入口文件
//webpack-dev-server 打包好的main.js是托管到了内存中；所以项目 `根目录` 中根本看不到

import React from 'react';
import ReactDOM from 'react-dom';
import Refs from './components/refs';
import JsTest from './components/JsTest'

const myApp = <div className='a123'>1234</div>;

ReactDOM.render(<JsTest />, document.getElementById('app'));
