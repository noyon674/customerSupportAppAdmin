/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const resetForm = () =>{
        setValues(initialValues);
    };

    return { handleChange, resetForm, errors, setErrors, values, setValues };
};