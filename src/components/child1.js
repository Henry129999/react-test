import React from 'react';
import ReactDOM from 'react-dom';
import ''

class Refs extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){
        const { msg = '' } = this.props;
        const { opacity } = this.state;

        return (
            <div className="child1">
                <p>222</p>
                1111
            </div>
        )
    }

    ;}

Refs.defaultProps = {
};

export default Refs;