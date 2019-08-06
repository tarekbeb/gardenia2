import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';
import '../login.css';
import { Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';


class Signup extends React.Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
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
                        Signup!
                    </Header>
                
                            <Field 
                                name="username" 
                                component='input' 
                                placeholder="username" 
                                type="text" />
                            <Field 
                                name="email" 
                                component='input' 
                                placeholder="email address" 
                                type="text" />
                            <Field 
                                name="zipcode" 
                                component='input' 
                                placeholder="12345" 
                                type="number" />
                            <Field
                                name='password'
                                type='password'
                                component='input'
                                placeholder="password"
                            />
                            <Button color="teal" fluid size="large">Signup</Button>
                        </Segment>
                    </Form>
                    {this.props.errorMessage && (
                            <Message error>
                                <h3>Error</h3>
                                {this.props.errorMessage}
                            </Message>
                        )}
                        <Message> Already have an account? <Link to="/signin" >Sign in</Link> </Message>

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
    reduxForm({form: 'signup'})
)(Signup)

