import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../login.css';


class Signout extends React.Component {

    componentDidMount() {
        this.props.signout();
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }
        const h1Style = {
            fontSize: '5em'
        }
        return (
            <>
                <div id='grass' style={divStyle}>
                    <h1 style={h1Style}>HAPPY PLANTING!</h1>
                </div>
            </>
        );
    }
}


export default connect(null, actions)(Signout)