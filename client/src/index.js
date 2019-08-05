import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import reducers from './reducers';
import Header from './layout/Header';
import reduxThunk from 'redux-thunk';
import Search from './components/Search';
import Wishlist from './components/Wishlist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, {
    auth: { authenticated: localStorage.getItem('token')}
}, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    
    <Provider store={store}>
        <BrowserRouter>
            <Header>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/signin' component={Signin}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/signout' component={Signout}/>
                    <Route path='/wishlist' component={Wishlist}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </Header>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

