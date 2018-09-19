import React from 'react';
import ReactDOM from 'react-dom';

//这是一个状态提升的案例
/***********注意事项***************************/
/*
* this.setState({}) 这种写法
* input中的value和onChange一起作用
* 状态提升要有一个公共的父组件的value和父组件来修改这个value值得方法
* 然后将这个方法传递给子组件
* */

class Child2 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          inputValue: "11"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value){
        this.setState({
            inputValue: value
        });
        console.log("value",value);
        console.log("inputValue",this.state.inputValue);
        console.log("父组件被调用了");
    }

    render(){
        const inputValue = this.state.inputValue;

        return (
            <div>
                <Child2Sub1 value={inputValue} onHandleChange={this.handleChange} />
                <br/>
                <Child2Sub2 value={inputValue} onHandleChange={this.handleChange} />
            </div>
        )
    }
}
Child2.defaultProps = {
};
export default Child2;

class Child2Sub1 extends React.Component {
    constructor (props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e){
        this.props.onHandleChange(e.target.value);
        console.log("重新调用了");
    }

    render(){
        const inputValue = this.props.value;
        console.log(this.props.onHandleChange);

        return (
            <input value={ inputValue } placeholder={"请输入内容"} onChange={this.onValueChange}/>
        )
    }
}

class Child2Sub2 extends React.Component {
    constructor (props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e){
        this.props.onHandleChange(e.target.value);
        console.log("重新调用了");
    }

    render(){
        const inputValue = this.props.value;
        console.log(this.props.onHandleChange);

        return (
            <input value={ "这个是华摄氏度"+inputValue } placeholder={"请输入内容"} onChange={this.onValueChange}/>
        )
    }
}



