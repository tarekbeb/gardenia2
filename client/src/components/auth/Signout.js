import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.signout();
    }

    render() {
        return (
            <>
                Happy Planting!
            </>
        );
    }
}


export default connect(null, actions)(Signout)