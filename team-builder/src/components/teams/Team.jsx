import React from 'react';
import {Link} from 'react-router-dom';

function Team(props) {
    return (
        <>
            <h1>Current Team Members</h1>
            {props.teamMembers.map(member => <Link to={`/edit/${member.id}`}key={member.id}><p>{member.name}</p></Link>)}
            <Link to='/add'>Add Member</Link>
            </>
    )
}

export default Team