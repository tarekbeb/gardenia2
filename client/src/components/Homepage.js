import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../components/homepage.css';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
// import { generateKeyPair } from 'crypto';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (

        <Container text className="fade-in">
            <Header
            as='h1'
            content='Gardenia'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '1.5em',
                color: "black"
            }}
            />
            <Header
            as='h2'
            content="Always wondering if your plants need water? Fret no more! Let them tell you when they are thursty..."
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
                color: "black"
            }}
            />
            <Button href="/dashboard" primary size='huge' style={{backgroundColor: '#2ec86f'}}>
            Try it out!
            <Icon name='right arrow' />
            </Button>
        </Container>

)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    // const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 500, padding: '2em 0em' }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Gardenia
          </Menu.Item>
          <Menu.Item as='a'>Dashboard</Menu.Item>
          <Menu.Item as='a'>Login</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
          <Menu.Item as='a'>Signout</Menu.Item>
          <Menu.Item as='a'>Search</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Dashboard
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Login
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Signup
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Signout
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Search
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const App = () => (
    <ResponsiveContainer />
)

export default App