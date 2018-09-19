import React from 'react';
import ReactDOM from 'react-dom';

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
            <div>
            </div>
        )
    }

    ;}

Refs.defaultProps = {
};

export default Refs;
