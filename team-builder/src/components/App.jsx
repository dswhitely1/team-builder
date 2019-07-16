import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Team from './teams/Team'
import TeamForm from './form/TeamForm';
import AddTeamListForm from "./form/AddTeamListForm";
import {useTeam} from "../hooks/useTeam";
import Navigation from "./navigation/Navigation";

function App() {
    const [teamList, setTeamList] = useState([{id: 0, team: 'WEBPT8'}, {id: 1, team: 'WEB20'}]);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('team-list')) {
            setTeamList(JSON.parse(localStorage.getItem('team-list')));
        }
        if (localStorage.getItem('teams')) {
            setTeams(JSON.parse(localStorage.getItem('teams')));
        }
    }, []);

    useEffect(() => {
        if (teams !== []) {
            localStorage.removeItem('teams');
            localStorage.setItem('teams', JSON.stringify(teams))
        }
    }, [teams]);
    useEffect(() => {
        if (teamList !== []) {
            localStorage.removeItem('team-list');
            localStorage.setItem('team-list', JSON.stringify(teamList))
        }
    }, [teamList]);

    return (
        <>
            <Navigation/>
            <Switch>
                <Route path='/add-team'
                       render={props => <AddTeamListForm {...props} updateTeamList={setTeamList} teamList={teamList}/>}/>
                <Route path='/edit/:id'
                       render={props => <TeamForm {...props} edit={true} members={teams} addTeam={setTeams}/>}/>
                <Route path='/add'
                       render={props => <TeamForm {...props} edit={false} members={teams} addTeam={setTeams}/>}/>
                <Route path='/' render={() => <Team teamMembers={teams} teamGroups={teamList}/>}/>
            </Switch>
        </>

    )
}

export default App