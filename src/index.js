import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
import Login from './views/login/view';
import Register from './views/register/view';
import Profile from './views/profile/view';
import Something from './views/something/something';
import Root from './root';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Root}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/something" component = {Something}/>
        </Router>),
    document.getElementById('root')
);
