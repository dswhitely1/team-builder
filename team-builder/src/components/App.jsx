import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Team from './teams/Team'
import TeamForm from './form/TeamForm';
import AddTeamListForm from "./form/AddTeamListForm";
import {useTeam} from "../hooks/useTeam";

function App() {
    const [teamList, getNextId, updateTeamList] = useTeam([]);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('team-list')) {
            updateTeamList(JSON.parse(localStorage.getItem('team-list')));
        }
        if (localStorage.getItem('teams')) {
            setTeams(JSON.parse(localStorage.getItem('teams')));
        }
    }, []);

    useEffect(() => {
        if (teams !== []) {
            localStorage.setItem('teams', JSON.stringify(teams))
        }
    }, [teams]);
    useEffect(() => {
        if (teamList !== []) {
            localStorage.setItem('team-list', JSON.stringify(teamList))
        }
    }, [teamList]);


    return (
        <Switch>
            <Route path='/add-team'
                   render={props => <AddTeamListForm {...props} updateTeam={updateTeamList} nextId={getNextId}/>}/>
            <Route path='/edit/:id' render={() => <TeamForm edit={true} members={teams}/>}/>
            <Route path='/add' render={() => <TeamForm edit={false} members={teams} addTeam={setTeams}/>}/>
            <Route path='/' render={() => <Team teamMembers={teams} teamGroups={teamList}/>}/>
        </Switch>

    )
}

export default App