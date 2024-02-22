import React, { useEffect, useState } from 'react'
import { Addemp, Getemp, Putemp } from '../services/EmpService';
import { useNavigate, useParams } from 'react-router-dom';
import { ListOfDepartments } from '../services/DepService';

const EmployeeAddorEdit = () => {
    const {id} = useParams();
    useEffect(()=>{
        if(id){
            Getemp(id)
            .then(res=>{setFirstName(res.data.firstName);
                        setLastName(res.data.lastName);
                        setEmail(res.data.email);
                        setdepartmentID(res.data.departmentID);})
            .catch(error=>console.log(error));
        }
    },[id]);
    function pageTitle()
    {
        if(id)
            return <h2 className="text-center mb-4">Edit Employee</h2>
        else
            return <h2 className="text-center mb-4">Add New Employee</h2>
    }
    const nav = useNavigate();


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [departmentID, setdepartmentID] = useState('');
    const [departments, setdepartments] = useState([]);

    useEffect(()=>
    {
        ListOfDepartments()
        .then((res)=>{setdepartments(res.data); console.log(departments);})
        .catch((error)=>{console.log(error)})
    },[])

    // these are error messages
    const [errors, setErrors] = useState(
        {
            firstNameError : '',
            lastNameError : '',
            emailError :'',
            depError :''
        })

    function validateForm() {
        var valid = true;
        const errorsCopy = { ...errors };
        if (firstName.trim() !== '')
            errorsCopy.firstNameError = '';
        else {
            errorsCopy.firstNameError = 'First Name is required';
            valid = false;
        }

        if (lastName.trim() !== '')
            errorsCopy.lastNameError = '';
        else {
            errorsCopy.lastNameError = 'Last Name is required';
            valid = false;
        }

        if (email.trim() !== '')
            errorsCopy.emailError = '';
        else {
            errorsCopy.emailError = 'Email is required';
            valid = false;
        }

        if (departmentID){
            errorsCopy.depError = '';
        }
     else 
        {
            errorsCopy.depError = 'Please select a department';
            valid = false;
        }

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
        if(validateForm()==true)
        {
            const e = { firstName, lastName, email, departmentID };
            if(id)
            {
                Putemp(id,e).then(()=>nav('/'));
            }
            else
            {
                Addemp(e).then(() => nav('/'));
            }
        }

    };

    

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-md-6">
                {
                    // CURLY BRACKET TO DYNAMICALY ADD THE TITLE
                    pageTitle() 
                }
                <div className="neon-border p-4">

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

                        <div className="form-group mb-2">
                            <label htmlFor="department" className="form-label">Select Department</label>
                            <select className={`form-control ${errors.depError ? 'is-invalid' : ''}`}
                            value={departmentID}
                            onChange={(e)=>setdepartmentID(e.target.value)}>
                                {departments.map(department =>
                                    <option key={department.id} value={department.id}>
                                        {department.departmentName}
                                    </option>
                            )}
                            </select>
                            {errors.depError !== '' && <div className='invalid-feedback'>{errors.depError}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAddorEdit
