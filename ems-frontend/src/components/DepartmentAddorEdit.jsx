import React, { useEffect, useState } from 'react';
import { AddDepartment, GetDepartment, EditDepartment } from '../services/DepService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentAddorEdit = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');

    const [errors, setErrors] = useState({
        departmentNameError: '',
        departmentDescriptionError: ''
    });

    useEffect(() => {
        let isMounted = true;

        if (id) {
            GetDepartment(id)
                .then(res => {
                    if (isMounted) {
                        setDepartmentName(res.data.departmentName);
                        setDepartmentDescription(res.data.departmentDescription);
                    }
                })
                .catch(error => console.log(error));
        }

        return () => {
            isMounted = false;
        };
    }, [id]);

    function pageTitle() {
        if (id)
            return <h2 className="text-center mb-4">Edit Department</h2>;
        else
            return <h2 className="text-center mb-4">Add New Department</h2>;
    }

    const validateForm = () => {
        let valid = true;
        const errorsCopy = { ...errors };
        if (departmentName.trim() === '') {
            errorsCopy.departmentNameError = 'Department Name is required';
            valid = false;
        } else {
            errorsCopy.departmentNameError = '';
        }
        if (departmentDescription.trim() === '') {
            errorsCopy.departmentDescriptionError = 'Department Description is required';
            valid = false;
        } else {
            errorsCopy.departmentDescriptionError = '';
        }
        setErrors(errorsCopy);
        return valid;
    };

    const handleDepartmentNameChange = (event) => {
        setDepartmentName(event.target.value);
    };

    const handleDepartmentDescriptionChange = (event) => {
        setDepartmentDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const department = { departmentName, departmentDescription };
            if (id) {
                EditDepartment(id, department).then(() => nav('/departments'));
            } else {
                AddDepartment(department).then(() => nav('/departments'));
            }
        }
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-md-6">
                {pageTitle()}
                <div className="neon-border p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="departmentName" className="form-label">Department Name</label>
                            <input type="text"
                                className={`form-control ${errors.departmentNameError !== '' ? 'is-invalid' : ''}`}
                                id="departmentName" value={departmentName} onChange={handleDepartmentNameChange} />
                            {errors.departmentNameError !== '' && <div className="invalid-feedback">{errors.departmentNameError}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="departmentDescription" className="form-label">Department Description</label>
                            <input type="text"
                                className={`form-control ${errors.departmentDescriptionError !== '' ? 'is-invalid' : ''}`}
                                id="departmentDescription" value={departmentDescription} onChange={handleDepartmentDescriptionChange} />
                            {errors.departmentDescriptionError !== '' && <div className="invalid-feedback">{errors.departmentDescriptionError}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DepartmentAddorEdit;
