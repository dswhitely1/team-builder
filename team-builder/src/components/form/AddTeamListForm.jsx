import React from 'react';
import {useForm} from "../../hooks/useForm";

function AddTeamListForm() {
    const [formValues, handleChange, handleSubmit] = useForm({
        teamList: ''
    }, submit);

    function submit() {
        return formValues
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add a New Team</label>
            <input name='teamList' value={formValues.teamList} onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default AddTeamListForm;