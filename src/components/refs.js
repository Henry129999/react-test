import React from 'react';
import ReactDOM from 'react-dom';

class Refs extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            opacity : 1,
        };
        // this.destroyComponent = this.destroyComponent.bind(this);
    }

    componentDidMount(){
        let temp = true;
        setInterval(
            function () {
                let { opacity } = this.state;
                opacity = opacity - 0.1;

                if( opacity <= 0 ){
                    opacity = 1;
                }
                this.setState({ opacity : opacity });
            }.bind(this), 200 )
    }

    getCoordination = (e) => {
        e.preventDefault();
        console.log(e.pageX,e.pageY);
        console.log("clientX",e.clientX);
        console.log("screenX",e.deltaY);
        if(e.shiftKey){
            console.log("shiftKey")
        }
    }
    handleWheel = (e) =>{
        e.preventDefault();
        console.log(e.deltaY);
    }

    keyDownEvent = (e) =>{
        console.log(e.key)
    }

    addChild = (e) =>{
        e.preventDefault();
        let item = document.createElement("li");
        e.appendChild(item);
    }

    destroyComponent(){

    }

    render(){
        const { msg = '' } = this.props;
        const { opacity } = this.state;

        return (
            <div>
                <div style={{opacity: opacity}}  onMouseOut={this.mouseEvent}>{msg}</div>
                <button onClick={this.destroyComponent} >是的</button>
                <img src="src/images/1532617351(1).jpg"  onWheel={this.handleWheel} onClick={this.getCoordination} alt="图片"/>
                <input type="text" onKeyDown={this.keyDownEvent}/>
                <div onClick={this.addChild}>13131</div>
            </div>
        )
    }

;}

Refs.defaultProps = {
};

export default Refs;


