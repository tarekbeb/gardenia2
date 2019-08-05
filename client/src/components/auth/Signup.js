import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signup extends React.Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/dashboard')
        })
    }
    
    render() {

        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Username</label>
                    <Field
                        name='username'
                        type='text'
                        component='input'
                        autoComplete='none' 
                    />
                </fieldset>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name='email'
                        type='text'
                        component='input'
                        autoComplete='none' 
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name='password'
                        type='password'
                        component='input'
                        autoComplete='none'
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign Up</button>
            </form>
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

