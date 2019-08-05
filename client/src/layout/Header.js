// OLD HEADER
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default () => {
//     return (
//         <>
//             <Link to='/'>Home | </Link> 
//             <Link to='/signin'>Signin | </Link>     
//             <Link to='/signout'>Signout | </Link>   
//             <Link to='/signup'>Signup | </Link>     
//             <Link to='/dashboard'>Dashboard | </Link>   
//             <Link to='/search'> Search</Link>
//         </>
//     )
// }

import _ from "lodash";
import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import myImage from './images/mainLogo.png';
import "../layout/header.css";

import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";


const NavBarMobile = ({
    children,
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible
}) => (
    <Sidebar.Pushable>
        <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={leftItems}
        vertical
        visible={visible}
        />
        <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
        >
        <Menu fixed="top" inverted>
            <Menu.Item>
            <Image size="mini" src="./images/mainLogo.png" />
            </Menu.Item>
            <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Menu position="right">
            {_.map(rightItems, item => <Menu.Item {...item} />)}
            </Menu.Menu>
        </Menu>
        {children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
    );

const NavBarDesktop = (props) => {
    return (
    <Menu fixed="top" inverted>
        <Menu.Item as={Link} to='/'>
            <Image size="mini" style={{paddingRight: "1em"}} src={myImage} />
            Gardenia
        </Menu.Item>
        <Menu.Item as={Link} to='/dashboard'>
            <font color="white">Dashboard</font>
        </Menu.Item>
        <Menu.Menu position="right">
            { (props.desktopProps.isLoggedIn) &&
                <Menu.Item >
                    Hello, {props.desktopProps.username}
                </Menu.Item>
            }
            { (Object.keys(props.desktopProps.weatherImage).length > 0) &&
                <Menu.Item >
                        <Image size='mini' src={props.desktopProps.weatherImage}/>
                        {props.desktopProps.tempMain.temp + 'F'}
                </Menu.Item>
            }
            { (!props.desktopProps.isLoggedIn) &&
                <Menu.Item as={Link} to='/signin' >
                    Login
                </Menu.Item>
            }
            { (props.desktopProps.isLoggedIn) &&
                <Menu.Item as={Link} to='/signout' >
                    Signout
                </Menu.Item>
            }
            { (!props.desktopProps.isLoggedIn) &&
                <Menu.Item as={Link} to='/signup' >
                    Sign Up
                </Menu.Item>
            }
            <Menu.Item as={Link} to='/search'>
                <font color="white">Search</font>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
    )
}

const NavBarChildren = ({ children }) => (
    <Container fluid style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        visible: false,
    };
}

    handlePusher = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false });
    };

    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
        const { children, leftItems, rightItems } = this.props;
        const { visible } = this.state;

    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <NavBarMobile
                    leftItems={leftItems}
                    onPusherClick={this.handlePusher}
                    onToggle={this.handleToggle}
                    rightItems={rightItems}
                    visible={visible}
                >
                    <NavBarChildren>{children}</NavBarChildren>
                </NavBarMobile>
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <NavBarDesktop desktopProps={this.props.stateProps}/>
                <NavBarChildren>{children}</NavBarChildren>
            </Responsive>
        </div>
        );
    }
}

const App = (props) => (
    <NavBar stateProps={props}>
        {props.children}
    </NavBar>
);

let mapStateToProps = (state) => {
    return ({
        forecast: state.weatherReducer.forecast,
        tempMain: state.weatherReducer.tempMain,
        zipcode: state.weatherReducer.zipcode,
        weatherImage: state.weatherReducer.weatherImage,
        isLoggedIn: state.auth.isLoggedIn,
        username: state.auth.username
    })
}


export default connect (
    mapStateToProps
)(App);

