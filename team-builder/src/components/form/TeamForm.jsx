import React from 'react';
import {useForm} from '../../hooks/useForm';

const TeamForm = props => {
    const [formValues, handleChange, handleSubmit] = useForm({
        name: '',
        role: '',
        email: '',
    }, submit)

    function submit() {

        props.addTeam([...props.members, formValues]);
    }
    console.log(props);
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
}

export default TeamForm;