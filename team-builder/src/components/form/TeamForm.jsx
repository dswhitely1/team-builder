import React from 'react';
import {useForm} from '../../hooks/useForm';

function TeamForm(props) {
    const [formValues, handleChange, handleSubmit] = useForm({
        name: '',
        role: '',
        email: '',
        team: ''
    }, submit)

    function submit() {
        return formValues
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value={formValues.name} name='name' onChange={handleChange} />
            <label>Email</label>
            <input value={formValues.email} name='email' onChange={handleChange} />
            <label>Role</label>
            <input value={formValues.role} name='role' onChange={handleChange} />
            <label>Team</label>
            <input value={formValues.team} name='team' onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default TeamForm;