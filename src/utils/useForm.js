import {useState} from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

  const handleFileChange = (e) => {
    setValues(prevValues => ({
      ...prevValues,
      thumbnail: e.target.files[0]
    }));
  };
    const resetForm = () =>{
        setValues(initialValues);
    };

    return { handleChange, resetForm, handleFileChange, errors, setErrors, values, setValues };
};
