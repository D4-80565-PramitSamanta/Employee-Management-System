import React, { useState } from 'react'
import { Addemp } from '../services/EmpService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeEdit = () => {

const {id} = useParams();

    const nav = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    // these are error messages
    const [errors, setErrors] = useState(
        {
            firstNameError: '',
            lastNameError: '',
            emailError: ''
        })

    function validateForm() {
        var valid = true;
        const errorsCopy = { ...errors };
        if (firstName.trim() != '')
            errorsCopy.firstNameError = '';
        else { errorsCopy.firstNameError = 'First Name is required'; valid = false; }

        if (lastName.trim() != '')
            errorsCopy.lastNameError = '';
        else { errorsCopy.lastNameError = 'Last Name is required'; valid = false; }

        if (email.trim() != '')
            errorsCopy.emailError = '';
        else { errorsCopy.emailError = 'Email is required'; valid = false; }

        setErrors(errorsCopy);
        console.log(valid);
        return valid;
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        if (validateForm() == true) {
            const e = { firstName, lastName, email }
            console.log(e);
            Addemp(e);
            nav('/');
        }

    };



    return (
        <div className="container d-flex justify-content-center">
            <div className="col-md-6">
                <div className="neon-border p-4">
                    <h2 className="text-center mb-4">Add New Employee</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text"
                                className={`form-control ${errors.firstNameError !== '' ? 'is-invalid' : ''}`}
                                id="firstName" value={firstName} onChange={handleFirstNameChange} />
                            {errors.firstNameError !== '' && <div className="invalid-feedback">{errors.firstNameError}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text"
                                className={`form-control ${errors.lastNameError !== '' ? 'is-invalid' : ''}`}
                                id="lastName" value={lastName} onChange={handleLastNameChange} />
                            {errors.lastNameError !== '' && <div className="invalid-feedback">{errors.lastNameError}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email"
                                className={`form-control ${errors.emailError !== '' ? 'is-invalid' : ''}`}
                                id="email" value={email} onChange={handleEmailChange} />
                            {errors.emailError !== '' && <div className="invalid-feedback">{errors.emailError}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeEdit
