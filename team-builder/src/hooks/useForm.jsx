import {useState} from 'react';

export const useForm = (initialState, handleCallBack) => {
    const [values, setValues] = useState(initialState);
    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    };
    const handleSubmit = e => {
        e.preventDefault();
        handleCallBack(values);
        setValues(initialState);
    };


    return [values, handleChange, handleSubmit, setValues];
};