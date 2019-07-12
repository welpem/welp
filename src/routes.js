import React from 'react';
import Register from './Components/Register'
import Home from './Components/Home'
import WOS from './Components/WOS'
import Reviews from './Components/Reviews'
import {Route, Switch} from 'react-router-dom';

export default (
    <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/WOS' component={WOS}/>
        <Route path='/reviews' component={Reviews}/>
    </Switch>
)
