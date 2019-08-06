import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';
import { Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
import '../login.css';


class Signin extends React.Component {

    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/dashboard')
        })
    }
    
    render() {

        const { handleSubmit } = this.props;
        return (

            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{backgroundColor: 'transparent',maxWidth: 450}}>
                

                    <Form onSubmit={handleSubmit(this.onSubmit)} >
                        <Segment>
                        {/* <Icon name="lock" color="teal"/> */}
                        <Header as="h1" icon color='teal' textAlign="center">
                        Login to Monitor Your Plants!
                    </Header>

                            <Field name="email" component='input' placeholder="email address" type="text" placeholder='email' />

                            <Field name="password" component='input' placeholder="password" type="password" placeholder='password' />
                            <Button color="teal" fluid size="large">Submit</Button>

                        </Segment>
                    </Form>
                        {this.props.errorMessage && (
                            <Message error>
                                <h3>Error</h3>
                                {this.props.errorMessage}
                            </Message>
                        )}
                        <Message> Don't have an account? <Link to="/signup" >Sign up</Link> </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signin'})
)(Signin)

