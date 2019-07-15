import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Team from './teams/Team'

function App() {
    return (
        <Switch>

            <Route path='/' component={Team} />
        </Switch>
    )
}

export default App