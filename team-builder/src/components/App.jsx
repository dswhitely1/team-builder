import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Team from './teams/Team'
import TeamForm from './form/TeamForm';

function App() {
    return (
        <Switch>
            <Route path='/edit' render={()=><TeamForm edit={true}/>}/>
            <Route path='/add' render={()=><TeamForm edit={false}/>}/>
            <Route path='/' component={Team}/>
        </Switch>

    )
}

export default App