import React from 'react';
import ReactDOM from 'react-dom';
import './JsTest.scss';


class JsTest extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){

        
        return (
            <div className="js-test">1</div>
        )
    }

    ;}

JsTest.defaultProps = {
};

export default JsTest;