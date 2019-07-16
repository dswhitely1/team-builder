import React, {useEffect} from 'react';
import {useForm} from '../../hooks/useForm';

const TeamForm = props => {
    const [formValues, handleChange, handleSubmit, updateTeamMember] = useForm({
        name: '',
        role: '',
        email: '',
    }, submit);
    console.log(props);
    useEffect(() => {
        console.log(props.members);
        if (props.edit) {
            console.log(props.members[Number(props.match.params.id)]);
            updateTeamMember(props.members[Number(props.match.params.id)]);
        }
    }, [props.members]);


    function submit() {
        if (props.edit) {
            updateATeamMember();
        } else {
            addTeamMember();
        }
    }

    function updateATeamMember() {
        const updateTeamMemberProfile = props.members.map(member => {
            if (member.id.toString() === props.match.params.id) {
                return formValues
            } else {
                return member;
            }
        })

        props.addTeam(updateTeamMemberProfile);
        props.history.push('/');
    }

    function addTeamMember() {
        const id = props.members.length === 0 ? 0 : props.members[props.members.length - 1].id + 1;
        const updatedFormNumbers = {id, ...formValues};
        props.addTeam([...props.members, updatedFormNumbers]);
        props.history.push('/');
    }

    console.log(formValues);


    return (
        <>
            <h1>Add New Member</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input value={formValues.name} name='name' onChange={handleChange}/>
                <label>Email</label>
                <input value={formValues.email} name='email' onChange={handleChange}/>
                <label>Role</label>
                <input value={formValues.role} name='role' onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </>
    )

};

export default TeamForm;