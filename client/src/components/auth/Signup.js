import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../login.css';
import {
    Button,
    Label
} from 'semantic-ui-react';


class Signup extends React.Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/dashboard')
        })
    }
    
    render() {

        const { handleSubmit } = this.props;
        return (
            <div id='grass' style={{textAlign: 'center', paddingTop: '30px'}}>
                <div style={{display: 'inline-block'}}>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <fieldset>
                            <Label>Username</Label>
                            <Field
                                name='username'
                                type='text'
                                component='input'
                                autoComplete='none' 
                            />
                        </fieldset>
                        <fieldset>
                            <Label>Email</Label>
                            <Field
                                name='email'
                                type='text'
                                component='input'
                                autoComplete='none' 
                            />
                        </fieldset>
                        <fieldset>
                            <Label>Password</Label>
                            <Field
                                name='password'
                                type='password'
                                component='input'
                                autoComplete='none'
                            />
                        </fieldset>
                        <div>{this.props.errorMessage}</div>
                        <Button>Sign Up</Button>
                    </form>
                </div>
            </div>
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

