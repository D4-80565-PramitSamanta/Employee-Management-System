import React, { useState } from 'react'
import { Addemp } from '../services/EmpService';
import { useNavigate } from 'react-router-dom';

const EmployeeAdd = () => {
    const nav = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
  
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
        const e = {firstName,lastName,email}
        console.log(e);

        Addemp(e);
        nav('/');

    };

    

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-md-6">
                <div className="neon-border p-4">
                    <h2 className="text-center mb-4">Add New Employee</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" value={lastName} onChange={handleLastNameChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAdd
