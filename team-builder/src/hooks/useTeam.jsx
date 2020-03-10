import {useState} from 'react';

export const useTeam = initialState => {
    const [team, setTeam] = useState(initialState);

    function getId() {
        return team[team.length - 1].id + 1;
    }

    const updateTeam = newTeam => setTeam([...team, newTeam]);
    console.log(team);
    return [team, getId, updateTeam]


};