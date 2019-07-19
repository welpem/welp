import React from 'react';
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import WOS from './Components/WOS/WOS'
import Reviews from './Components/Reviews/Reviews'
import {Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing/Landing'
import Profile from './Components/Profile/Profile';

export default (
    <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/WOS' component={WOS}/>
        <Route path='/reviews' component={Reviews}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)
