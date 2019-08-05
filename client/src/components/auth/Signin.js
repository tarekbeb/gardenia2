import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signin extends React.Component {

    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/dashboard')
        })
    }
    
    render() {

        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
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
                <button>Sign In</button>
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
    reduxForm({form: 'signin'})
)(Signin)



// import React from 'react';
// import { compose } from 'redux';
// import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// // import '../login.css';



// class Signin extends React.Component {

//     onSubmit = (formProps) => {
//         console.log(formProps)

//         this.props.signin(formProps, () => {
//             this.props.history.push('/dashboard')
//         })
//     }
    

//     render() {

//         const { handleSubmit } = this.props;
//         return (
//             <div id="grass">
//                 <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//                     <Grid.Column style={{ maxWidth: 450 }}>
//                     <Header as='h2' color='teal' textAlign='center'>
//                         <Image src='/layout/mainLogo.png' /> Log-in to your account
//                     </Header>
//                     <form size='large' onSubmit={handleSubmit(this.onSubmit)} >
//                         <Segment stacked>
//                         <Form.Input fluid icon='user' name='email' type='text' iconPosition='left' placeholder='E-mail address' />
//                         <Form.Input
//                             fluid
//                             icon='lock'
//                             iconPosition='left'
//                             placeholder='Password'
//                             name='password'
//                             type='password'
//                         />
//                         <div>{this.props.errorMessage}</div>
//                         <Button color='teal' fluid size='large'>
//                             Login
//                         </Button>
//                         </Segment>
//                     </form>
//                     <Message>
//                         New to us? <a href='/signup'>Sign Up</a>
//                     </Message>
//                     </Grid.Column>
//                 </Grid>
//             </div>
//         );
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         errorMessage: state.auth.errorMessage
//     }
// }


// export default compose(
//     connect(mapStateToProps, actions),
//     reduxForm({form: 'signin'})
// )(Signin)
