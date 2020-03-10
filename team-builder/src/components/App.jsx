import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Team from './teams/Team'
import TeamForm from './form/TeamForm';
import AddGroups from "./form/AddGroups";
import Navigation from "./navigation/Navigation";
import AddMemberToGroups from "./form/AddMemberToGroups";

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
                <Route path='/edit-member-team/:id' render={props => <AddMemberToGroups {...props} teamList={teamList} members={teams} addTeam={setTeams}/>} />
                <Route path='/edit-team/:id'
                       render={props => <AddGroups {...props} updateTeamList={setTeamList} teamList={teamList}
                                                   edit={true}/>}/>
                <Route path='/add-team'
                       render={props => <AddGroups {...props} updateTeamList={setTeamList} teamList={teamList}
                                                   edit={false}/>}/>
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