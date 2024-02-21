import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteDepartment, ListOfDepartments } from '../services/DepService';
import { useNavigate } from 'react-router-dom';

function ListOfDep() {
    const nav = useNavigate();
    const [departments, setDepartments] = useState([]);

    function fetchAllDepartments() {
        ListOfDepartments()
            .then(response => { setDepartments(response.data) })
            .catch(error => { console.log(error) });
    }

    useEffect(() => {
        fetchAllDepartments();
    }, []);

    function addNewDepartment() {
        nav('/add-department');
    }

    function handleUpdate(id) {
        nav(`/edit-department/${id}`);
    }

    function handleDelete(id) {
        DeleteDepartment(id)
            .then(response => { console.log(response.data); fetchAllDepartments(); })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h2>List of Departments</h2>
            <button className="btn btn-primary mb-2" onClick={addNewDepartment}>Add Department</button>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map(d =>
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.departmentName}</td>
                            <td>{d.departmentDescription}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => { handleUpdate(d.id) }}>Update</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { handleDelete(d.id) }}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListOfDep;
